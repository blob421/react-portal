import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  top_div : {
     display:'flex', flexDirection:'row',
     backgroundColor:'#7b7b7bff'
  },
  image:{
    width:'35%', height:130
  },
 username:{
  display:'flex', alignItems:'center', justifyContent:'center', width:'32.5%', 
  borderWidth: 1,borderColor: '#212121ff', borderStyle: 'solid',
 },
 change_pic_cont:{
  height:'17%', backgroundColor:'#717171ff', justifyContent:'center'
 },
 pic_btn:{
   backgroundColor:'#FFFFFF', width:'35%', padding:5, height:'100%', 
   alignItems:'center', justifyContent:'center'

 },
 text_color:{
  color:'#FFFFFF'
 },
})