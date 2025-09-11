import { View, Text,  Pressable, ScrollView, TextInput, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styles from '../assets/styles/team';



export default function Team() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const STATIC_URL = process.env.EXPO_PUBLIC_STATIC_ENDPOINT;
  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;
  const MEDIA_URL = process.env.EXPO_PUBLIC_MEDIA_ENDPOINT;
  useEffect(() => {
  
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('accessToken');

      try {
        const response = await fetch(`${API_URL}team/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
       
        setData(result);
        setLoading(false);
       
         
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
    

    <View style={styles.tasks_cont}> 
 

     
      <ScrollView>
           
          {data?.data?.map((user) => (
          <View key={user.id} style={styles.users_div}>
                <View style={styles.image_div}>

              
                <Image source={{ uri: `${MEDIA_URL}${user.picture}`}} 
                style={{width:40, height:40}}/>

                  <Text>
                  {user.username}
                  </Text>

              </View>

              <View style={styles.active_task_div}>
                  <Image source={{ uri: `${STATIC_URL}task_icon.png`}} 
                  style={{width:20, height:20}}/>
                  
              
                    <Text>
                    {user.active_task}
                    </Text>
              </View>
              <View style ={styles.last_login}>
                <Text> Last login : {user.last_login}</Text>
              </View>
          
          </View>
        ))}
    
      </ScrollView>
    </View>
        

      </>
      
    )}
  </View>
)}


