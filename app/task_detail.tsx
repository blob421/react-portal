import { View, Text,  Pressable, ScrollView, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState} from 'react';
import styles from '../assets/styles/task_detail';
import { useRoute } from '@react-navigation/native';


export default function Task() {
  const route = useRoute();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = route.params

  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;

  useEffect(() => {
  
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('accessToken');

      try {
        const response = await fetch(`${API_URL}tasks/${id}/`, {
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
    

    <View style={styles.task_cont}> 
          <View style={styles.task_name}>
            <Text>{data?.data?.name}</Text>
          </View>
          
     
          <ScrollView>
            <Text style={styles.description}>{data?.data.description}</Text>
            
    
          </ScrollView>
        
    </View>
       <View style={styles.bottom_options}>
                 <Pressable style={styles.completed_btn}>
                  <Text>Completed</Text>
                 </Pressable>
                 <Pressable style={styles.completed_btn}>
                  <Text>Subtasks</Text>
                 </Pressable>
                 <Pressable style={styles.completed_btn}>
                  <Text>Files</Text>
                 </Pressable>
        </View>

      </>
      
    )}
    </View>
)}


