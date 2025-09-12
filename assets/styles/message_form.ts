import { StyleSheet } from 'react-native';

export default StyleSheet.create({

 outer_div:{
     
        backgroundColor:'#ffffffff', flex:1
},

 title_input:{
   alignItems:'center', fontSize:17, borderColor:'#d4d4d4ff', borderWidth:2, height:'10%',
   paddingLeft:10
   },
 text_input:{
   width:'100%', flex:0.7 , marginTop:10, padding:10, fontSize:16
 },
 replying_to:{
   alignItems:'center', height:'10%', justifyContent:'center',  backgroundColor:'#c7d6e2ff',
 },
 text:{
   fontSize:16
 },
 bottom_options:{
  height:'10%', backgroundColor:'#e6e6e6ff', alignItems:'center', justifyContent:'center'
 },
 reply_btn:{
    borderColor:'#d4d4d4ff', borderWidth:2, width:'100%', height:'100%', alignItems:'center',
    justifyContent:'center'
 }

})