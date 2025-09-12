import { View, Text,  Pressable, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import styles from '../assets/styles/message_form';
import { useNavigation} from '@react-navigation/native';
import { MessageStackParamList, RootStackParamList } from '../navigation/types'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import checkAuth from 'navigation/checkAuth';

export default function MessageForm() { 
  const route = useRoute();
  const {id, recipient} = route.params
  const navMsg = useNavigation<NativeStackNavigationProp<MessageStackParamList>>();
  const navRoot = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;

 
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  
    const sendMessage = async() => {
      const isAuthenticated = await checkAuth(); 
      
            if (!isAuthenticated) {
              console.log('User not authenticated');
              navRoot.navigate('LoginStack', {screen:'Login'})
              
            }
    if (!title.trim()) {
    alert('Title cannot be blank');
    return;
    }
    if (!content.trim()) {
      alert('Content cannot be blank');
      return;
    }
      const token = await AsyncStorage.getItem('accessToken');
      try{
      const response = await fetch(`${API_URL}messages/`, {
            method : 'POST',
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: content,
            recipient:id,
            title:title,
            forwarded: 'false'
          })

      });
      
      const msg_response = await response.json();
      console.log(msg_response)
      
      navMsg.navigate('Messages')


    }
    catch(error){
      console.log(error)
    }
    }
    
    



return (
 <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <View style={styles.outer_div}>
   


    
        <View style={styles.replying_to}>
         <Text style={styles.text}>Replying to {recipient}</Text>

        </View>                        
     <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          enableOnAndroid
          extraScrollHeight={0}
          contentContainerStyle={{ flexGrow: 1 }}
        >
    
                <TextInput placeholder='Title...' style={styles.title_input} 
                        onChangeText={setTitle} value={title} maxLength={44} >
                          
                </TextInput>

   
                <TextInput placeholder='Write here ...' multiline style={styles.text_input} 
                        onChangeText={setContent} value={content} editable>
                          
                </TextInput>

          </KeyboardAwareScrollView>


                  <View style={styles.bottom_options}>
                            <Pressable onPress={()=> sendMessage() } style={styles.reply_btn}>
                        
                            <Text>Reply</Text>
                            </Pressable>
                   
                </View>
             
  
 
  </View>
</TouchableWithoutFeedback>
);
}


