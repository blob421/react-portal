
import React from 'react';
import './global.css';
import Navigation from './navigation/navigation'; // adjust path if needed
import NavBar from './components/NavBar'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, navigationRef } from './navigation/jwtRefresh';


export default function App() {

  
  return(
    <NavigationContainer ref ={navigationRef}>
       <AuthProvider>
              <Navigation />
              <NavBar />
      </AuthProvider>
    </NavigationContainer>  ) 
}

