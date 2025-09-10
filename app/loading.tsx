import { View, Text,  Pressable, ScrollView, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styles from '../assets/styles/tasks';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList} from '../navigation/types'




export default function Loading() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const { id } = route.params;
  console.log(id)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;

  useEffect(() => {
  
    const isReady = async () => {

      try {
        const response = await fetch(`${API_URL}loading/${id}/`, {
          method: 'GET',
    
        });

        const data = await response.json();
        console.log(data)
      if (data.ready === true){
        navigation.navigate('Home' ,{screen: 'Profile'})
    }
    else{
         setTimeout(isReady, 2000);
    }
   
         
      } catch (error) {
        console.error('Fetch error:', error);
        Alert.alert('Error', 'Failed to load data');
      }
    };

   isReady();
   
    
 

  }, []);


return (
  
      <Text>Loading...</Text>
   
)
}

