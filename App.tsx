import React from 'react';
import { StatusBar } from 'react-native';
import { Routers } from './src/routes'; 

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f7f7" />
      <Routers />
    </>
  );
}