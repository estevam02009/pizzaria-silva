import React, { useState } from 'react';
import { AppProvider, useApp } from './context/appContext';
import { Header } from './components/Header';

function AppContent() {

  const { state } = useApp();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
