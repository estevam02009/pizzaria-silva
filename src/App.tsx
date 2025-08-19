import React, { useState } from 'react';
import { AppProvider, useApp } from './context/appContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage'; 
import { AuthForm } from './components/AuthForm';
import { MenuPage } from './components/MenuPage';

function AppContent() {

  const { state } = useApp();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const renderCurrentView = () => {
    switch (state.currentView) {
      case 'auth':
        return <AuthForm />;
      case 'menu':
        return <MenuPage />;
      default:
        return <HomePage />;
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {state.view !== 'auth' && ( 
        <Header showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
      )}
      {renderCurrentView()}
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
