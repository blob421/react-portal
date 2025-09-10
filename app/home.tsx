import { View, Text, ScrollView, Pressable, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styles from '../assets/styles/home';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { HomestackParamList} from '../navigation/types'

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<HomestackParamList>>();


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;
      const token = await AsyncStorage.getItem('accessToken');

      try {
        const response = await fetch(`${API_URL}home/`, {
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
        <View>
            <Text style={styles.title}>Billboard</Text>

        </View>
    
        <View style={styles.border_msg}> 
                <ScrollView style={styles.pinned_msg}>
                    <Text>
                    {data.data.pinned_msg}
                    </Text>
                </ScrollView>
        </View>
        <View style={styles.profile_div}>
               <Pressable style={styles.profile_btn} 
               onPress={() => navigation.navigate('Profile')}>
                
                <Text>
                  Profile
                </Text> 
               </Pressable>
        </View>
        

      </>
    )}
  </View>
);
}
