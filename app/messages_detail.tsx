import { View, Text,  Pressable, ScrollView, Modal, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useCallback } from 'react';
import styles from '../assets/styles/message_detail';
import { useRoute, useFocusEffect, useNavigation } from '@react-navigation/native';
import handleNav from 'navigation/handleNavParams';
import { RootStackParamList, MessageStackParamList } from '../navigation/types'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import checkAuth from 'navigation/checkAuth';

export default function MessageDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [recipient_id, setRecId] = useState(null);
  const [recipient_name, setRecName] = useState("");

  const route = useRoute();
  const navMsg = useNavigation<NativeStackNavigationProp<MessageStackParamList>>();
  const navRoot = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { id } = route.params;
  const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;

  const forwardMessage = async () => {
          const token = await AsyncStorage.getItem('accessToken');
        const isAuthenticated = await checkAuth(); 
        
              if (!isAuthenticated) {
                console.log('User not authenticated');
                navRoot.navigate('LoginStack', {screen:'Login'})
                
              }
      try {
        const response = await fetch(`${API_URL}messages/`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
                 forwarded:"true",
                 message_id: id,
                 recipient : recipient_id

                }),
        });
        
        const result = await response.json();
      
        navMsg.navigate('Messages');
      

  }catch(error){
    
    console.log(error)
  }}


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
        const response = await fetch(`${API_URL}messages/${id}/`, {
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
        if (result.data?.new === true){
       
        await fetch(`${API_URL}messages/${id}/`, {
          method : 'PATCH',
          headers : {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
                 new:false,

                }),
        });
      }
         
      } catch (error) {
        console.error('Fetch error:', error);
        Alert.alert('Error', 'Failed to load data');
      }
    };

    fetchData();
  }, []));


return (
  <View style={styles.outer_div}>
    {loading ? (
      <Text>Loading...</Text>
    ) : (
        <>  
        <View style={styles.message_div}>

                  <View style={styles.msg_title}>

                    <Text >{data.data.title}</Text>
                  </View>

                    <View style={styles.time_div}>
                        <Text style={styles.from_text}>
                      From: {data.data.sender}
                      </Text>

                        <Text style={styles.date_text}>
                        {data.data.timestamp}
                      </Text>

                    </View>
             
          <ScrollView>
            <Text style={styles.msg_text}>{data.data.content}</Text>
          </ScrollView>
            </View>


           <View style={styles.bottom_options}>
              <Pressable onPress={()=> handleNav('MessageForm', navMsg, navRoot, 
              {id:data?.data?.user, recipient:data?.data?.sender})} style={styles.completed_btn}>
              <Text>Reply</Text>
              </Pressable>
              <Pressable onPress={()=> setModalVisible(true)} style={styles.completed_btn}>
              <Text>Forward</Text>
              </Pressable>
              <Pressable style={styles.completed_btn}>
              <Text>Files</Text>
              </Pressable>
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
                <Text style={styles.header}>Recipients</Text>
                 <View style={styles.recipient_cont}>
                     <ScrollView>
                      {data?.contacts?.map((user)=>(
                          <View key={user.id} style={styles.contacts_div}>
                            <Pressable onPress={()=> {
                             setModalVisible(false); setModalVisible2(true); setRecId(user.id); setRecName(user.username)}}>

                                 <Text style={styles.username}>{user.username}</Text>
                            </Pressable>
                               
                          </View>
                      ))}
                        
                     </ScrollView>
                 </View>
                <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
                  <Text style={styles.closeText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>




    <Modal 
            transparent={true}
            animationType="fade"
            visible={modalVisible2}
            onRequestClose={() => {setModalVisible2(false); setModalVisible(false)}}
          >
            <View style={styles.overlay}>
              <View style={styles.modalContent2}>
                <Text style={styles.header2}>Forward to {recipient_name} ? </Text>
                

                  <View style={styles.forward_btns}>
                        
                      
                        <Pressable onPress={() => {setModalVisible2(false);
                        forwardMessage()}} style={styles.closeButton2}>
                        <Text style={styles.closeText2}>Forward</Text>
                      </Pressable>

                      <Pressable onPress={() => {
                        setModalVisible2(false)}} style={styles.closeButton2}>
                        <Text style={styles.closeText2}>Close</Text>
                      </Pressable>

                  </View>

              </View>
            </View>
          </Modal>
    </View>
)}


