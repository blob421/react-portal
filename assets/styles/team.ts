import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 users_div:{
    backgroundColor:'#FFFFFF', padding:14 , borderColor:'#000000', borderWidth:1
 },
 active_task_div:{
  display:'flex', flexDirection:'row', gap:10, marginTop:10,  backgroundColor:'#b8c0ceff',
  padding:4
 },
 image_div:{
   display:'flex', flexDirection:'row', gap:10, marginTop:1, alignItems:'center'
 },
 last_login:{
   marginTop:10, textAlign:'right', width:'100%',
 }
})