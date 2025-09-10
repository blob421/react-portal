import { View, Text,  Pressable, ScrollView, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styles from '../assets/styles/message_detail';
import { useRoute } from '@react-navigation/native';


export default function MessageDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { id } = route.params;
  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;

  useEffect(() => {
  
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('accessToken');

      try {
        const response = await fetch(`${API_URL}messages/${id}/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        console.log(result)
        setData(result);
        setLoading(false);
        if (result.data?.new === true){
       
        await fetch(`${API_URL}messages/${id}/`, {
          method : 'PATCH',
          headers : {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
                 new:false,

                }),
        });
      }
         
      } catch (error) {
        console.error('Fetch error:', error);
        Alert.alert('Error', 'Failed to load data');
      }
    };

    fetchData();

   
    
 

  }, []);


return (
  <View style={styles.outer_div}>
    {loading ? (
      <Text>Loading...</Text>
    ) : (
        <>
              <Text style={styles.msg_title}>{data.data.title}</Text>
            <View style={styles.time_div}>
            <Text style={styles.from_text}>
               From: {data.data.sender}
            </Text>
             <Text style={styles.date_text}>
              {data.data.timestamp}
             </Text>
            </View>
             
            

    
    
       
          <ScrollView style={styles.msg_scrollview}>
            <Text style={styles.msg_text}>{data.data.content}</Text>
          </ScrollView>
          

                      
                  
                  
                  
                
    
        

      </>
      
    )}
    </View>
)}


