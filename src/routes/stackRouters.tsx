import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackList } from '../@types/navigation';
import { Login } from "../pages/Login";
import { Cadastro } from '../pages/Cadastro';
import { TabsRouters } from './bottomTabs';
import { useAuth } from '../hooks/useAuth';

const Stack = createStackNavigator<StackList>();

export const StackRouters = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </>
      ) : (
        <Stack.Screen name="MainTabs" component={TabsRouters} />
      )}
    </Stack.Navigator>
  );
};