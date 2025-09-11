import { View, Text,  Pressable, ScrollView, TextInput, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styles from '../assets/styles/chat';

import { useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import checkAuth from 'navigation/checkAuth';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RootStackParamList, MessageStackParamList } from '../navigation/types'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export default function Team() {
  dayjs.extend(relativeTime);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const DJANGO_URL = process.env.EXPO_PUBLIC_DJANGO_ENDPOINT;
  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;
  const MEDIA_URL = process.env.EXPO_PUBLIC_MEDIA_ENDPOINT;
  const navMsg = useNavigation<NativeStackNavigationProp<MessageStackParamList>>();
  const sendMessage = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      try{
      const response = await fetch(`${API_URL}chat/submit/`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name: 'message', 
                  message: msg
                }),
    });
          
          const result = await response.json();
          console.log(result.message)
           setMsg("");
           fetchData();
          }catch(error){
            console.log(error)
          }

    }
  

    const fetchData = async () => {
    const isAuthenticated = await checkAuth(); 
      
            if (!isAuthenticated) {
              console.log('User not authenticated');
              navRoot.navigate('LoginStack', {screen:'Login'})
              
            }
      const token = await AsyncStorage.getItem('accessToken');

      try {
        const response = await fetch(`${API_URL}chat/`, {
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
    useFocusEffect(
  useCallback(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);

   
    
 

  }, []));


return (
<KeyboardAwareScrollView
  keyboardShouldPersistTaps="handled"
  enableOnAndroid
  extraScrollHeight={-115}
  contentContainerStyle={{ flexGrow: 1 }}
>
  <View style={styles.outer_div}>
    {loading ? (
      <Text>Loading...</Text>
    ) : (
      <>
    


 

     
      <ScrollView style={styles.scrollview}>
           
          {data?.map((message) => (
          <View key={message.id} style={styles.chat_bubble}>
                <View style={styles.image_div}>

              
                <Image source={{ uri: `${MEDIA_URL}${message.pic_path}`}} 
                style={{width:30, height:30}}/>
   
                  <Text style={styles.user_text}>
                    {message.user}
                  </Text>

              </View>

              <View style={styles.text_bubble}>
        
                  
                    <Text>
                     {message.text}
                    </Text>
              </View>
              <View style ={styles.last_login}>
                <Text style={styles.time_text}>{dayjs(message.time).fromNow()}</Text>
              </View>
          
          </View>
        ))}
    
      </ScrollView>
   


      </>
      
    )}
<TextInput
  placeholder="Type..."
  onSubmitEditing={sendMessage}
  onChangeText={setMsg}
  value={msg}
  returnKeyType="send"
  style={{
    height: 40,
    backgroundColor: '#FFFFFF',
    paddingVertical: 0,
    paddingHorizontal: 10,
    fontSize: 16,
    lineHeight: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    
    
  }}
/>
          
  </View>
          </KeyboardAwareScrollView>                
  
)}


