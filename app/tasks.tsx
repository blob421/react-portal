import { View, Text,  Pressable, ScrollView, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styles from '../assets/styles/tasks';



export default function Tasks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;

  useEffect(() => {
  
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('accessToken');

      try {
        const response = await fetch(`${API_URL}tasks/`, {
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
           
              {data?.data?.map((task) => (
              <View key={task.id} style={styles.task_div}>
                 <Text>
                  {task.name}
                  </Text>
                  <Text style={styles.date_text}>
                    Due date: {task.due_date}
                  </Text>
              
          
              </View>
            ))}
    
          </ScrollView>
    </View>
        

      </>
      
    )}
    </View>
)}


