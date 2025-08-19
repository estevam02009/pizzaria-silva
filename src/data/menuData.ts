import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Classic',
    description: 'Molho de tomate fresco, queijo mussarela, manjericão fresco e azeite de oliva',
    price: 14.99,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    popular: true,
    ingredients: ['molho de tomate', 'queijo mussarela', 'manjericão fresco', 'azeite de oliva'],
    sizes: {
      pequena: 12.99,
      media: 14.99,
      grande: 17.99
    }
  },
  {
    id: '2',
    name: 'Pepperoni Supreme',
    description: 'Molho de tomate fresco, queijo mussarela, pepperoni premium e orégano',
    price: 16.99,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg',
    popular: true,
    ingredients: ['molho de tomate fresco', 'queijo mussarela', 'pepperoni premium', 'orégano'],
    sizes: {
      pequena: 14.99,
      media: 16.99,
      grande: 19.99
    }
  },
  {
    id: '3',
    name: 'Quattro Stagioni',
    description: 'Pizza de quatro estágios com cogumelos, artícheos, ham e azeite de oliva',
    price: 19.99,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
    ingredients: ['molho de tomate', 'queijo mussarela', 'cogumelos', 'artícheos', 'ham', 'azeite de oliva'],
    sizes: {
      pequena: 17.99,
      media: 19.99,
      grande: 22.99
    }
  },
  {
    id: '4',
    name: 'Truffle Deluxe',
    description: 'Molho branco, queijo mussarela, óleo de trufle, arugula e parmesan',
    price: 24.99,
    category: 'pizza',
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
    ingredients: ['molho branco', 'queijo mussarela', 'oleo de trufle', 'arugula', 'parmesan'],
    sizes: {
      pequena: 22.99,
      media: 24.99,
      grande: 27.99
    }
  },
  {
    id: '5',
    name: 'Bruschetta Trio',
    description: 'Três variedades de bruschetta com tomates frescos e ervas',
    price: 9.99,
    category: 'appetizer',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg',
    popular: true,
    ingredients: ['pão', 'tomates', 'azeite de oliva', 'alho', 'manjericão']
  },
  {
    id: '6',
    name: 'Antipasto Platter',
    description: 'Seleção de carne italiana, queijos, olivas e vegetais',
    price: 16.99,
    category: 'appetizer',
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg',
    ingredients: ['presunto', 'salame', 'mussarela', 'azeitonas', 'pimentões assados']
  },
  {
    id: '7',
    name: 'Sorvete Limão',
    description: 'Sorvete italiano com limão fresco, água esparsa e pimenta',
    price: 4.99,
    category: 'drink',
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg',
    ingredients: ['lemon juice', 'sparkling water', 'mint', 'sugar']
  },
  {
    id: '8',
    name: 'Cerveja Selecção',
    description: 'Seleção de cerveja local (Pilsner, IPA, ou Tipo)',
    price: 6.99,
    category: 'drink',
    image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
  },
  {
    id: '9',
    name: 'Tiramisu',
    description: 'Sorvete clássico italiano com pães cozidos no café e mascarpone',
    price: 7.99,
    category: 'dessert',
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg',
    popular: true,
    ingredients: ['pães cozidos', 'café', 'mascarpone', 'chocolate']
  },
  {
    id: '10',
    name: 'Gelato Selection',
    description: 'Sorvete italiano - baunilha, chocolate ou morango',
    price: 5.99,
    category: 'dessert',
    image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
    ingredients: ['leite', 'creme', 'sabores naturais']
  }
];