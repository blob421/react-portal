import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomestackParamList} from '../navigation/types'; // adjust path
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    async function checkAuth(){
    const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;
    const token = await AsyncStorage.getItem('accessToken')
    const refresh  = await AsyncStorage.getItem('refreshToken')
      try{
        const response = await fetch(`${API_URL}checkAuth/`, {
          method: 'GET',
          headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        if (response.status === 200){
                  setIsAuthenticated(true);
        }
        else{
          try {
              const response = await fetch(`${API_URL}jwt/refresh/`,{
                  method: 'POST',
              headers: {
            'authorization': `Bearer ${refresh}`,
            'Content-Type': 'application/json'}
              }
              )
              if (response.status === 200){
                    setIsAuthenticated(true);

              }
              else if(navigationRef.isReady()) {
                  setIsAuthenticated(false);
                  navigationRef.navigate('Login');
              }

          }catch(error){
          console.log(error)
        }
        }

      }catch(error){
      console.log(error)
    }
    };


   useEffect(() => {
  const unsubscribe = navigationRef.addListener('state', () => {
    checkAuth(); // runs on every screen change
  });

  return unsubscribe;
}, []);

    return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
    
  
  
  