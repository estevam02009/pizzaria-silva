import React from "react";
import { ShoppingCart, User, Pizza, Menu, X } from "lucide-react";
import { useApp } from "../context/appContext";

interface HeaderProps {
    showMobileMenu: boolean;
    setShowMobileMenu: (show: boolean) => void;
}

export function Header({ showMobileMenu, setShowMobileMenu }: HeaderProps) {
    const { state, dispatch } = useApp();

    const cartItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    const navigation = [
        { name: "Home", view: 'home' as const },
        { name: "Menu", view: 'menu' as const },
        { name: "Pedidos", view: 'pedidos' as const },
    ]

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* LOGO */}
                    <div className="flex items-center space-x-2">
                        <Pizza className="h-8 w-8 text-red-600" />
                        <span className="text-2xl font-bold text-red-600">Pizza Silva</span>
                    </div>

                    {/* DESKTOP NAVIGATION */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => dispatch({ type: 'SET_VIEW', payload: item.view })}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${state.currentView === item.view
                                    ? 'text-red-600 bg-red-50'
                                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {state.isAuthenticated ? (
                            <>
                                <button
                                    onClick={() => dispatch({ type: 'SET_VIEW', payload: 'carrinho' })}
                                    className="relative p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
                                >
                                    <ShoppingCart className="h-6 w-6" />
                                    {cartItemsCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                            {cartItemsCount}
                                        </span>
                                    )}
                                </button>
                                <button
                                    onClick={() => dispatch({ type: 'SET_VIEW', payload: 'perfil' })}
                                    className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
                                >
                                    <User className="h-5 w-5" />
                                    <span className="text-sm font-medium">{state.user?.name}</span>
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => dispatch({ type: 'SET_VIEW', payload: 'auth' })}
                                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
                            >
                                Login
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="p-2 text-gray-600 hover:text-red-600"
                        >
                            {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {showMobileMenu && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="space-y-2">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        dispatch({ type: 'SET_VIEW', payload: item.view });
                                        setShowMobileMenu(false);
                                    }}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${state.currentView === item.view
                                            ? 'text-red-600 bg-red-50'
                                            : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}

                            {state.isAuthenticated ? (
                                <div className="pt-2 border-t border-gray-200 space-y-2">
                                    <button
                                        onClick={() => {
                                            dispatch({ type: 'SET_VIEW', payload: 'carrinho' });
                                            setShowMobileMenu(false);
                                        }}
                                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600"
                                    >
                                        <span>Cart</span>
                                        {cartItemsCount > 0 && (
                                            <span className="bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                {cartItemsCount}
                                            </span>
                                        )}
                                    </button>
                                    <button
                                        onClick={() => {
                                            dispatch({ type: 'SET_VIEW', payload: 'perfil' });
                                            setShowMobileMenu(false);
                                        }}
                                        className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600"
                                    >
                                        Profile ({state.user?.name})
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => {
                                        dispatch({ type: 'SET_VIEW', payload: 'auth' });
                                        setShowMobileMenu(false);
                                    }}
                                    className="w-full mt-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                                >
                                    Login
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}