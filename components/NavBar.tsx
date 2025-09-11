import React, { use } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';

import { RootStackParamList, HomestackParamList, TaskStackParamList,
   MessageStackParamList} from '../navigation/types'

import styles from '../assets/styles/navbar';
import handleNav from '../navigation/handleNavRoot'


export default function Navbar() {

  const navRoot = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  


  return (
     <View>
        <View style={styles.nav_top}>
        <Pressable onPress={() =>handleNav('HomeStack','Home', navRoot)} style={styles.link}>
        <Text>
                Home</Text>
        </Pressable>
        <Pressable onPress={() => handleNav('MessageStack','Messages', navRoot)}style={styles.link}>
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
        
        <Pressable style={styles.link} onPress={() => handleNav('TaskStack', 'Tasks', navRoot)}>
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