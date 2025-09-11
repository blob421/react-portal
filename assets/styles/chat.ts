import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 outer_div:{
       position: 'absolute', top: 0, left: 0,right: 0,bottom: 0,
        backgroundColor:'#f7eacfff',
},
scrollview:{
 
},
chat_bubble:{
   backgroundColor:'#d4e8efff', padding:10, borderColor:'#000000', borderWidth:2,
  borderRadius:4
},

 image_div:{
   display:'flex', flexDirection:'row', gap:10, marginTop:1, alignItems:'center', height:50,
   
 },
 user_text:{
  color:'#000000'
 },
 text_bubble:{
  borderColor:'#000000', borderWidth:2,
  borderRadius:14,  backgroundColor:'#FFFFFF',
  padding:10
 },
 input:{
  height:40, backgroundColor:'#FFFFFF', padding: 0,
  margin: 0, borderWidth: 1, fontSize:16
 },
 last_login:{
  display:'flex', alignItems:'flex-end', marginTop:6, justifyContent:'center', marginRight:3
 },
 time_text:{
  fontSize:12
 },
 
})