import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from '../service/authService';
import api from '../service/api';
import { User, LoginCredentials, AuthContextData } from '../@types/auth';

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const [savedUser, savedToken] = await Promise.all([
          AsyncStorage.getItem('@VibeCheck:user'),
          AsyncStorage.getItem('@VibeCheck:token')
        ]);

        if (savedUser && savedToken) {
          api.defaults.headers.Authorization = `Bearer ${savedToken}`;
          setUser(JSON.parse(savedUser));
        }
      } catch (e) {
        console.error("Falha ao carregar dados locais", e);
      } finally {
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function login({ email, senha }: LoginCredentials) {
    try {
      const { token, id } = await authService.login({ email, senha });

      const dadosUsuario: User = { 
        email, 
        id, 
        nome: email.split('@')[0] 
      };

      await Promise.all([
        AsyncStorage.setItem('@VibeCheck:token', token),
        AsyncStorage.setItem('@VibeCheck:user', JSON.stringify(dadosUsuario))
      ]);

      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(dadosUsuario);
    } catch (error) {
      throw error; 
    }
  }

  async function logout() {
    await AsyncStorage.multiRemove(['@VibeCheck:token', '@VibeCheck:user']);
    api.defaults.headers.Authorization = '';
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}