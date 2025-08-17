import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Classic',
    description: 'Fresh tomato sauce, mozzarella cheese, fresh basil, and olive oil',
    price: 14.99,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    popular: true,
    ingredients: ['tomato sauce', 'mozzarella', 'fresh basil', 'olive oil'],
    sizes: {
      small: 12.99,
      medium: 14.99,
      large: 17.99
    }
  },
  {
    id: '2',
    name: 'Pepperoni Supreme',
    description: 'Tomato sauce, mozzarella, premium pepperoni, and oregano',
    price: 16.99,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg',
    popular: true,
    ingredients: ['tomato sauce', 'mozzarella', 'pepperoni', 'oregano'],
    sizes: {
      small: 14.99,
      medium: 16.99,
      large: 19.99
    }
  },
  {
    id: '3',
    name: 'Quattro Stagioni',
    description: 'Four seasons pizza with mushrooms, artichokes, ham, and olives',
    price: 19.99,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
    ingredients: ['tomato sauce', 'mozzarella', 'mushrooms', 'artichokes', 'ham', 'olives'],
    sizes: {
      small: 17.99,
      medium: 19.99,
      large: 22.99
    }
  },
  {
    id: '4',
    name: 'Truffle Deluxe',
    description: 'White sauce, mozzarella, truffle oil, arugula, and parmesan',
    price: 24.99,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
    ingredients: ['white sauce', 'mozzarella', 'truffle oil', 'arugula', 'parmesan'],
    sizes: {
      small: 22.99,
      medium: 24.99,
      large: 27.99
    }
  },
  {
    id: '5',
    name: 'Bruschetta Trio',
    description: 'Three varieties of bruschetta with fresh tomatoes and herbs',
    price: 9.99,
    category: 'aperitivo',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
    popular: true,
    ingredients: ['bread', 'tomatoes', 'basil', 'garlic', 'olive oil']
  },
  {
    id: '6',
    name: 'Antipasto Platter',
    description: 'Selection of Italian meats, cheeses, olives, and vegetables',
    price: 16.99,
    category: 'aperitivo',
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg',
    ingredients: ['prosciutto', 'salami', 'mozzarella', 'olives', 'roasted peppers']
  },
  {
    id: '7',
    name: 'Italian Lemonade',
    description: 'Fresh lemon juice with sparkling water and mint',
    price: 4.99,
    category: 'bebidas',
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg',
    ingredients: ['lemon juice', 'sparkling water', 'mint', 'sugar']
  },
  {
    id: '8',
    name: 'Craft Beer Selection',
    description: 'Local craft beer selection (Pilsner, IPA, or Wheat)',
    price: 6.99,
    category: 'bebidas',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
  },
  {
    id: '9',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: 7.99,
    category: 'sobremesa',
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg',
    popular: true,
    ingredients: ['ladyfingers', 'coffee', 'mascarpone', 'cocoa powder']
  },
  {
    id: '10',
    name: 'Gelato Selection',
    description: 'Italian gelato - vanilla, chocolate, or strawberry',
    price: 5.99,
    category: 'sobremesa',
    image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
    ingredients: ['milk', 'cream', 'natural flavors']
  }
];