import { StyleSheet } from 'react-native';

export default StyleSheet.create({

 inputs : {
        marginBottom: 10, borderWidth: 1, padding: 8, backgroundColor:'#FFFFFF', 
        borderColor:'grey',
 },
 outer_div:{
        position: 'absolute', top: 0, left: 0,right: 0,bottom: 0,
        alignItems: 'center', backgroundColor:'#f7eacfff',
 },
 time_div:{
         display:'flex', flexDirection:'row', width:'100%', padding:10, 
         backgroundColor:'#ebe6e6ff'
 },
 from_text:{
      width:'50%', justifyContent:'flex-start', paddingLeft:10,
 },
 date_text:{
      width:'50%', textAlign:'right', paddingRight:10
 },
 msg_text:{
          paddingTop: 30, padding:15, backgroundColor:'#FFFFFF',
          
      //  backgroundColor:'grey'
 },
 msg_title:{
         textAlign:'center', fontSize:15, backgroundColor:'#e6e8edff', 
         padding:15, width:'100%',
 },
 border_msg:{
       width:'100%', height:'100%', backgroundColor:'#736f6fff'
 },
 msg_scrollview:{
       backgroundColor:'#ffffffff',width:'100%', height:'20%'
 }
  
})