import React from 'react';
import { Clock, Star, Phone } from 'lucide-react';
import { useApp } from '../context/appContext';

export function HomePage() {
  const { dispatch } = useApp();


  const features = [
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: '30-45 minutos para sua porta'
    },
    {
      icon: Star,
      title: 'Ingredientes de Qualidade',
      description: 'Ingredientes frescos e premium a cada pedido'
    },
    {
      icon: Phone,
      title: 'Atualizações via WhatsApp',
      description: 'Receba atualizações em tempo real sobre o status do seu pedido'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-green-800 mb-6">
              Pizzaria Silva
              <span className="block text-red-600">Delivered Fresh</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experimente o sabor da Itália com nossas pizzas artesanais, feitas com os melhores ingredientes. 
              Peça agora e receba quentinha na sua porta!
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button
                onClick={() => dispatch({ type: 'SET_VIEW', payload: 'menu' })}
                className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Peça Agora
              </button>
              <button
                onClick={() => dispatch({ type: 'SET_VIEW', payload: 'menu' })}
                className="w-full sm:w-auto border-2 border-green-800 text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 hover:text-white transition-colors duration-200"
              >
                Ver Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher a Pizzaria Silva?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-200">
                  <feature.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Feito com amor, servido com orgulho
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Cada pizza é cuidadosamente preparada por nossos chefs experientes usando técnicas tradicionais italianas e os ingredientes mais frescos de origem local.
                  </p>
                  <button
                    onClick={() => dispatch({ type: 'SET_VIEW', payload: 'menu' })}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                  >
                    Explore nosso cardápio
                  </button>
                </div>
              </div>
              <div className="h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
                  alt="Delicious pizza being prepared"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Dúvidas? Estamos aqui para ajudar!
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp para suporte instantâneo, ofertas especiais ou pedidos personalizados
          </p>
          <button
            onClick={() => window.open('https://wa.me/', '_blank')}
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Chat no WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}