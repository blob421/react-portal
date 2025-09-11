import { View, Text, ScrollView, TextInput, Modal, Alert, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import styles from '../assets/styles/profile';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList} from '../navigation/types'




export default function Profile() {
const STATIC_URL = process.env.EXPO_PUBLIC_STATIC_ENDPOINT;
const MEDIA_URL = process.env.EXPO_PUBLIC_MEDIA_ENDPOINT;
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
const [image, setImage] = useState<string | null>(null);
const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;
const [emptyArray, setEmptyArray] = useState<number[]>([]);
const [modalVisible, setModalVisible] = useState(false);
const [starText, setStarText] = useState("");

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
    navigation.navigate('LoadingStack', {
      screen: 'Loading',
      params: { id, photo:'true'},
});
  }
 
};

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasNavigated, setHasNavigated] = useState(false);

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
        console.log(result)
        setHasNavigated(true);
        if (result.stats === null){
          navigation.navigate('LoadingStack', {screen: 'Loading', params :{id:result.celery, photo: 'false'}})
        }
        
        
        setData(result);
        setLoading(false);
        const stars = result.stars.length
        const emptyStars = 5 - stars
        setEmptyArray(Array(emptyStars).fill(1));
        console.log(emptyArray)
      
        
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
                <View style={styles.team_cont}>
                        <Text style={styles.team_text}>{data.user.team}</Text>
  
                </View>
              
          </View>


        <View style={styles.profile_middle}>
                <View style={styles.info_block}>
                  <Text style={styles.text_white}>Time joined</Text>
                  <Text style={styles.text_white}>{data.user.joined}</Text>
                </View>

                <View style={styles.info_block2}>
                  <Text style={styles.text_white}>Tasks count</Text>
                  <Text style={styles.text_white}>{data.stats2?.total_completed}</Text>
                </View>
                <View style={styles.info_block2}>
                   <Text style={styles.text_white}>Days scheduled</Text>
                  <Text style={styles.text_white}>{data.stats2?.days_scheduled}</Text>
                </View>
               
               
        </View>
           <View style={styles.profile_middle}>
                                  <View style={styles.info_block}>
                     <Text style={styles.text_white}>Last login</Text>
                  <Text style={styles.text_white}>{data.user.last_login}</Text>                 
                 
                </View>

                <View style={styles.info_block2}>
                  <Text style={styles.text_white}>Mean completion</Text>
                  <Text style={styles.text_white}>{data.stats?.task_mean_time} h</Text>
                </View>
                <View style={styles.info_block2}>
                   <Text style={styles.text_white}>Days missed</Text>
                  <Text style={styles.text_white}>{data.stats2?.days_missed}</Text>
                </View>
          </View>


        <View style={styles.profile_middle}>
          <View style={styles.star_cont}> 
          {data?.stars?.map((star) => (
           <Pressable onPress={() => {
                                      setModalVisible(true);
                                      setStarText(star.star_note);
                                    }}>
         <Image key={star.id} source={{ uri: `http://10.0.0.31:8000/static/star_icon3.png`}} style={{ width: 44, height: 44 }}>
        
         </Image>  
          </Pressable>
        ))}
         {emptyArray.map((star) => (
         <Image key={star} source={{ uri: `http://10.0.0.31:8000/static/star_icon_empty3.png`}} style={{ width: 44, height: 44 }}>
        
         </Image>  
        
        ))}
          
          </View>
             <View style={styles.info_block2}>
                  <Text style={styles.text_white}>Urgent suceeded</Text>
                  <Text style={styles.text_white}>{data.stats2?.total_urgent}</Text>
            </View>

        </View>
     
        

      </>
    )}
           
        <Modal 
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Text>⭐ This is a star with special meaning!</Text>
            <Text style={styles.modalText}>{starText}</Text>
            <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

  </View>
);

}
