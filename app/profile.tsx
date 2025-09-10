import { View, Text, ScrollView, TextInput, Button, Alert, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styles from '../assets/styles/profile';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList, HomestackParamList, LoadingStackParamList,
  LoginStackParamList} from '../navigation/types'
  



export default function Profile() {
const MEDIA_URL = process.env.EXPO_PUBLIC_MEDIA_ENDPOINT;
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
const [image, setImage] = useState<string | null>(null);
const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;


const uploadImage = async (uri: string) => {
  const token = await AsyncStorage.getItem('accessToken');
  const formData = new FormData();
  formData.append('image', {
    uri,
    name: 'photo.jpg',
    type: 'image/jpeg',
  } as any);

  try {
    const response = await fetch(`${API_URL}upload/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    console.log('Upload response:', data);
    return data.message;
  } catch (error) {
    console.error('Upload failed:', error);
  }
};


const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    quality: 1,
   
  });
  
  if (!result.canceled) {
    const uri = result.assets[0].uri;
    setImage(uri);
    const id = await uploadImage(uri); 
    console.log('Navigating with ID:', id);
    navigation.navigate('Loading', {
      screen: 'Loading',
      params: { id },
});
  }
 
};

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      
      const token = await AsyncStorage.getItem('accessToken');

      try {
        const response = await fetch(`${API_URL}profile/`, {
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
         <View style={styles.top_div}>

            <Image source={{ uri: `${MEDIA_URL}${data.data.picture}`}}style={
              styles.image}/>
          


              <View style={styles.username}>
                <Text style={styles.text_color}>{data.user.username}</Text>
              </View>
              <View style={styles.username}>
                 <Text style={styles.text_color}>{data.data.role}</Text>
              </View>

         


         </View>

          <View style={styles.change_pic_cont}>
            <Pressable onPress={()=> pickImage()} style={styles.pic_btn}>
              <Text>Change picture</Text>
            </Pressable>
          </View>


        <View style={styles.profile_div}>
          
                <Text>
                  Profile
                </Text>
               
        </View>
        

      </>
    )}
  </View>
);

}
