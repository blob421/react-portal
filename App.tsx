
import React from 'react';
import './global.css';
import Navigation from './navigation/navigation'; // adjust path if needed
import NavBar from './components/NavBar'
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigation/navRef';
import { useState, useEffect } from 'react';


export default function App() {

   const [currentRoute, setCurrentRoute] = useState<string | null>(null);

  useEffect(() => {
  const unsubscribe = navigationRef.addListener('state', () => {
    const route = navigationRef.getCurrentRoute()?.name;
    setCurrentRoute(route || null);
  });

  return unsubscribe;
}, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigation />
{currentRoute && currentRoute !== 'Login' && <NavBar />}
    </NavigationContainer>
  );
}


