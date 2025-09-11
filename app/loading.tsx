import { View, Text,  Pressable, ScrollView, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styles from '../assets/styles/tasks';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList, HomestackParamList} from '../navigation/types'
import handleNav from 'navigation/handleNavRoot';



export default function Loading() {
  const navRoot = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const navHome = useNavigation<NativeStackNavigationProp<HomestackParamList>>();
   
  const route = useRoute();
  const { id } = route.params;
  const { photo } = route.params;
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;
 
  useEffect(() => {
  let isCancelled = false;
    const isReady = async () => {
      
      const token = await AsyncStorage.getItem('accessToken');
      if (isCancelled) return;

      try {
        const response = await fetch(`${API_URL}loading/${id}/${photo}/`, {
          method: 'GET',
           
             headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
    
        });

        const data = await response.json();
      
      if (data.ready === true){
         handleNav('HomeStack','Profile', navRoot)
    }
    else{
         setTimeout(isReady, 3000);
    }
   
         
      } catch (error) {
        console.error('Fetch error:', error);
        Alert.alert('Error', 'Failed to load data');
      }
    };

   isReady();
  
   return () => {
    isCancelled = true;
  };
    
 

  }, []);


return (
  
      <Text>Loading...</Text>
   
)
}

