import React, { useState } from 'react';
import { View,Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // adjust path
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from '../assets/styles/Login';


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
        navigation.navigate('Home');
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
    <View style={styles.outer_div}>
          
        <View style={styles.form_div}>

            <Text style={styles.title}>
             Welcome
            </Text>

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

              <Button title="Login" onPress={handleLogin} />

         </View>
    </View>
  );
}
