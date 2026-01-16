import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '../context/AuthContext';
import { EventModalProvider } from '../context/EventModalContext';
import { StackRouters } from './stackRouters';

export const Routers = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <EventModalProvider>
          <StackRouters />
        </EventModalProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};