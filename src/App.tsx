import React, { useState } from 'react';
import { AppProvider, useApp } from './context/appContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage'; 

function AppContent() {

  const { state } = useApp();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const renderCurrentView = () => {
    switch (state.currentView) {
      case 'home':
        return <HomePage />;
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {StaticRange.currentView !== 'auth' && (
        <Header showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
      )}
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
