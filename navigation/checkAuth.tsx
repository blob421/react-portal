import AsyncStorage from '@react-native-async-storage/async-storage';


export default async function checkAuth(){
    const API_URL = process.env.EXPO_PUBLIC_PORTAL_IP;
    const token = await AsyncStorage.getItem('accessToken')
    const refresh  = await AsyncStorage.getItem('refreshToken')

      try{
        const response = await fetch(`${API_URL}checkAuth/`, {
          method: 'GET',
          headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        if (response.status === 401){
          try {
              const response = await fetch(`${API_URL}jwt/refresh/`,{
                  method: 'POST',
              headers: {
            'authorization': `Bearer ${refresh}`,
            'Content-Type': 'application/json'}
              }
              )
              if (response.status === 400){
                return false
              }

          }catch(error){
          console.log(error)
        }
        }

      }catch(error){
      console.log(error)
    }
    return true
    }
    
