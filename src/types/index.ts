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
    category: 'pizza' | 'aperitivo' | 'bebidas' | 'sobremesa'
    image: string;
    popular?: boolean;
    ingredints?: string[];
    size?: {
        small: number;
        medium: number;
        large: number;
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
    estimatedDeliveyTime?: Date;
    deliveryAddress: string;
    customerInfo: {
        name: string;
        phone: string;
    }
}