import React, { useState } from 'react';
import { View,Text, TextInput, Button, Alert, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // adjust path
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../assets/styles/Login';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}jwt/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
     console.log("Status:", response.status);
console.log("Data:", data);
      if (response.ok) {
        await AsyncStorage.setItem('accessToken', data.access);
        await AsyncStorage.setItem('refreshToken', data.refresh)
        console.log("Login successful, navigating to Home");
        navigation.navigate('HomeStack', {screen:'Home'});
        Alert.alert('Login successful');
        
        // Navigate to another screen or fetch protected data
      } else {
        Alert.alert('Login failed', data.detail || 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.outer_div}>
          
       
           <View style={styles.title_div}>
                <Text style={styles.title}>
                Welcome
                </Text>
           </View>
          <View style={styles.form_div}>

            <TextInput 
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              style={styles.inputs}/>
     
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.inputs}/>
              <View style={styles.btn_div}>

                
                  <Pressable onPress={handleLogin} style={styles.login_btn}>
                  <Text style={styles.login_text}>
                    Login
                  </Text>
                  </Pressable>
               </View>
                 

               
         </View>
                <View style={styles.bottom_banner}>

               </View>
         
    </View>
</TouchableWithoutFeedback>
  );
}
