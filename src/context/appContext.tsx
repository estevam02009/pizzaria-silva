import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { User, CartItem, Order, MenuItem } from '../types';

interface AppState {
  user: User | null;
  cart: CartItem[];
  orders: Order[];
  isAuthenticated: boolean;
  currentView: 'home' | 'menu' | 'carrinho' | 'pedidos' | 'perfil' | 'auth';
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_ITEM'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'SET_VIEW'; payload: AppState['currentView'] }
  | { type: 'LOAD_DATA'; payload: Partial<AppState> };

const initialState: AppState = {
  user: null,
  cart: [],
  orders: [],
  isAuthenticated: false,
  currentView: 'home',
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case 'SET_VIEW':
      return {
        ...state,
        currentView: action.payload,
      };
    case 'LOAD_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  addToCart: (item: MenuItem, quantity: number, size?: string) => void;
  removeFromCart: (itemId: string) => void;
  placeOrder: () => Promise<void>;
  sendWhatsAppNotification: (order: Order) => void;
} | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Load data from localStorage on app start
    const savedUser = localStorage.getItem('pizzeria_user');
    const savedCart = localStorage.getItem('pizzeria_cart');
    const savedOrders = localStorage.getItem('pizzeria_orders');

    if (savedUser) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(savedUser) });
    }
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      dispatch({ type: 'LOAD_DATA', payload: { cart } });
    }
    if (savedOrders) {
      const orders = JSON.parse(savedOrders);
      dispatch({ type: 'LOAD_DATA', payload: { orders } });
    }
  }, []);

  useEffect(() => {
    // Save to localStorage when state changes
    if (state.user) {
      localStorage.setItem('pizzeria_user', JSON.stringify(state.user));
    }
    localStorage.setItem('pizzeria_cart', JSON.stringify(state.cart));
    localStorage.setItem('pizzeria_orders', JSON.stringify(state.orders));
  }, [state.user, state.cart, state.orders]);

  const addToCart = (item: MenuItem, quantity: number, size?: string) => {
    const cartItem: CartItem = {
      id: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity,
      size: size as any,
      totalPrice: item.sizes && size ? item.sizes[size as keyof typeof item.sizes] * quantity : item.price * quantity,
    };
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const placeOrder = async () => {
    if (!state.user || state.cart.length === 0) return;

    const order: Order = {
      id: `ORD-${Date.now()}`,
      userId: state.user.id,
      items: state.cart,
      totalAmount: state.cart.reduce((sum, item) => sum + item.totalPrice, 0),
      status: 'pendente',
      orderDate: new Date(),
      estimatedDeliveryTime: new Date(Date.now() + 45 * 60 * 1000), // 45 minutes
      deliveryAddress: state.user.address,
      customerInfo: {
        name: state.user.name,
        phone: state.user.phone,
      },
    };

    dispatch({ type: 'ADD_ORDER', payload: order });
    dispatch({ type: 'CLEAR_CART' });
    sendWhatsAppNotification(order);
  };

  const sendWhatsAppNotification = (order: Order) => {
    const message = `🍕 New Order Confirmation!\n\nOrder ID: ${order.id}\nCustomer: ${order.customerInfo.name}\nPhone: ${order.customerInfo.phone}\nTotal: $${order.totalAmount.toFixed(2)}\n\nItems:\n${order.items.map(item => `• ${item.quantity}x ${item.menuItem.name}${item.size ? ` (${item.size})` : ''}`).join('\n')}\n\nDelivery Address: ${order.deliveryAddress}\n\nEstimated delivery: ${order.estimatedDeliveryTime?.toLocaleTimeString()}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AppContext.Provider value={{
      state,
      dispatch,
      addToCart,
      removeFromCart,
      placeOrder,
      sendWhatsAppNotification,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}