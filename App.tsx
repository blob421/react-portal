
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
    const interval = setInterval(() => {
      if (navigationRef.isReady()) {
        const route = navigationRef.getCurrentRoute()?.name;
        if (route !== currentRoute) {
          setCurrentRoute(route || null);
        }
      }
    }, 100); // poll every 100ms

    return () => clearInterval(interval);
  }, [currentRoute]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigation />
      {currentRoute !== 'Login' && <NavBar />}
    </NavigationContainer>
  );
}


