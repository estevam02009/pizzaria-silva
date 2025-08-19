import React, { useState } from 'react';
import { Plus, Star } from 'lucide-react';
import { useApp } from '../context/appContext';

import { menuItems } from '../data/menuData';
import type { MenuItem } from '../types';


export function MenuPage() {
  const { addToCart, state } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('media');
  const [quantity, setQuantity] = useState(1);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'pizza', name: 'Pizzas' },
    { id: 'appetizer', name: 'Acompanhamentos' },
    { id: 'drink', name: 'Bebidas' },
    { id: 'dessert', name: 'Sobremesas' },
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem, size?: string) => {
    if (!state.isAuthenticated) {
      alert('Por favor, faça login para adicionar itens ao carrinho');
      return;
    }

    addToCart(item, quantity, size);
    setSelectedItem(null);
    setQuantity(1);
    setSelectedSize('media');
  };

  const getItemPrice = (item: MenuItem, size?: string) => {
    if (item.sizes && size) {
      return item.sizes[size as keyof typeof item.sizes];
    }
    return item.price;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Nosso Cardápio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nossos pratos autênticos, feitos com os melhores ingredientes e receitas tradicionais.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-semibold">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Popular</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                {item.ingredients && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.slice(0, 3).map((ingredient, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {ingredient}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="text-gray-500 text-xs">+{item.ingredients.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-red-600">
                    R${item.price.toFixed(2)}
                  </div>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Item Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full max-h-screen overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white text-gray-600 hover:text-red-600 rounded-full p-2 shadow-lg"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.name}</h2>
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                
                {selectedItem.sizes && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Tamanho</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(selectedItem.sizes).map(([size, price]) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`p-3 rounded-lg border-2 text-center transition-colors duration-200 ${
                            selectedSize === size
                              ? 'border-red-600 bg-red-50 text-red-600'
                              : 'border-gray-200 hover:border-red-300'
                          }`}
                        >
                          <div className="font-semibold capitalize">{size}</div>
                          <div className="text-sm text-gray-600">${price.toFixed(2)}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Quantidade</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 transition-colors duration-200"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300 transition-colors duration-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => handleAddToCart(selectedItem, selectedItem.sizes ? selectedSize : undefined)}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  Adicionar ao Carrinho - R${(getItemPrice(selectedItem, selectedItem.sizes ? selectedSize : undefined) * quantity).toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}