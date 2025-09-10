import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList, HomestackParamList, LoginStackParamList} from '../navigation/types'
import styles from '../assets/styles/navbar';
import checkAuth from '../navigation/jwtRefresh'


export default function Navbar() {


  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

   const handleNav = async (target) => {
    const isAuth = await checkAuth();
    console.log(isAuth)
    if (isAuth) {
     
      navigation.navigate(target, {screen: target});
    } else {
      navigation.navigate('Login', {screen:'Login'});
    }
  };
  
  return (
     <View>
        <View style={styles.nav_top}>
        <Pressable onPress={() =>handleNav('Home')} style={styles.link}>
        <Text>
                Home</Text>
        </Pressable>
        <Pressable onPress={() => handleNav('Messages')}style={styles.link}>
        <Text>
            Messages
            </Text>
        </Pressable>
        
        <Pressable style={styles.link}>
        <Text>
            Team
        </Text>
        </Pressable>


         </View>

        <View style={styles.nav_bot}>
        
        <Pressable style={styles.link} onPress={() => handleNav('Tasks')}>
        <Text>
            Tasks
        </Text>
        </Pressable>
          
        <Pressable style={styles.link}>
        <Text>
            Project
        </Text>
        </Pressable>
          
        <Pressable style={styles.link}>
        <Text>
            Chat
        </Text>
        </Pressable>


         </View>
    </View>

  )



}