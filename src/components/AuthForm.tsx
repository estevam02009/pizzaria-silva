import React, { useState } from "react";

import { User as UserIcon, Mail, Phone, MapPin, Lock } from "lucide-react";
import { useApp } from "../context/appContext";
import type { User } from "../types";

export function AuthForm() {
    const { dispatch } = useApp();
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simulate login - in real app, would verify credentials
      const savedUsers = JSON.parse(localStorage.getItem('pizzeria_users') || '[]');
      const user = savedUsers.find((u: User) => u.email === formData.email);
      
      if (user) {
        dispatch({ type: 'SET_USER', payload: user });
        dispatch({ type: 'SET_VIEW', payload: 'home' });
      } else {
        alert('User not found. Please register first.');
      }
    } else {
      // Register new user
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        createdAt: new Date(),
      };

      // Save to localStorage (in real app, would save to backend)
      const savedUsers = JSON.parse(localStorage.getItem('pizzeria_users') || '[]');
      savedUsers.push(newUser);
      localStorage.setItem('pizzeria_users', JSON.stringify(savedUsers));

      dispatch({ type: 'SET_USER', payload: newUser });
      dispatch({ type: 'SET_VIEW', payload: 'home' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
        <div>
            <div>
                <h2>{isLogin ? 'Bem vindo de volta' : 'Junte-se à pizzaria silva'}</h2>
                <p>
                    {isLogin ? 'Acesse sua conta' : 'Crie sua conta para fazer pedidos'}
                </p>
            </div>
        </div>
    </div>
  )

}

