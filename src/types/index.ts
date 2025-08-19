export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    createdAt: Date;
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'pizza' | 'appetizer' | 'drink' | 'dessert'
    image: string;
    popular?: boolean;
    ingredients?: string[];
    sizes?: {
        pequena: number;
        media: number;
        grande: number;
    };
}

export interface CartItem {
    id: string;
    menuItem: MenuItem;
    quantity: number;
    size?: 'pequena' | 'media' | 'grande';
    customizations?: string[];
    totalPrice: number;
}

export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    totalAmount: number;
    status: 'pendente' | 'em-preparo' | 'pronto' | 'entregue' | 'cancelado';
    orderDate: Date;
    estimatedDeliveryTime?: Date;
    deliveryAddress: string;
    customerInfo: {
        name: string;
        phone: string;
    }
}