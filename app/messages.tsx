import { View, Text,  Pressable, ScrollView, TextInput, Button, Alert, AppRegistry } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useCallback } from 'react';
import styles from '../assets/styles/messages';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RootStackParamList, MessageStackParamList } from '../navigation/types'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import handleNav from 'navigation/handleNavParams';
import checkAuth from 'navigation/checkAuth';


export default function Messages() { 
  const navMsg = useNavigation<NativeStackNavigationProp<MessageStackParamList>>();
  const navRoot = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;
  
 
  const [data, setData] = useState(null);
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(true);

useFocusEffect( 
      useCallback(() => {   

    const fetchData = async () => {
      const isAuthenticated = await checkAuth(); 

      if (!isAuthenticated) {
        console.log('User not authenticated');
        navRoot.navigate('LoginStack', {screen:'Login'})
        
      }
      const token = await AsyncStorage.getItem('accessToken');

      try {
        const response = await fetch(`${API_URL}messages/`, {
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
    
    
  }, []));

const filterMessages = async() => {
      const token = await AsyncStorage.getItem('accessToken');
      try{
      const response = await fetch(`${API_URL}messages/?term=${term}`, {
            method : 'GET',
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },

      });

      const msg_response = await response.json();
      console.log(msg_response)
      setData(msg_response);
      setLoading(false);


    }
    catch(error){
      console.log(error)
    }
    }
return (
  <View style={styles.outer_div}>
    {loading ? (
      <Text>Loading...</Text>
    ) : (
      <>
        <View>
         

        </View>
    
        <View>
               <View style={styles.search_cont}>
                   <TextInput placeholder='Search' value={term} 
                                     onChangeText={setTerm} style={styles.input}></TextInput>

                   <Pressable style={styles.go_btn} onPress={filterMessages}>
                    <Text style={styles.go_txt}>Go</Text>
                    </Pressable>

               </View>
             <View style={styles.msgs_cont}> 
                <ScrollView >
                    {data?.data?.map((message) => (
                    <View key={message.id} style={styles.msg_div}>

                      <Pressable onPress={() => handleNav('Message_detail', navMsg, navRoot, 
                        {id: message.id})}>

                        <Text style = {[styles.msg_txt, message.new === true && styles.new_msg_txt]}>
                        <Text style={styles.sender}>{message.sender}: </Text> 
                        {message.title}
                        </Text>
                    
                      </Pressable>
                    </View>
                  ))}
                
                </ScrollView>
                </View>
        </View>
        

      </>
    )}
  </View>
);
}


