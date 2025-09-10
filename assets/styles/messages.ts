import { StyleSheet } from 'react-native';

export default StyleSheet.create({


 outer_div:{
        position: 'absolute', top: 0, left: 0,right: 0,bottom: 0,
         backgroundColor:'#f7eacfff', display:'flex', alignItems:'center', 
         flexDirection:'column'
 },
 search_cont:{
       display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',
        marginTop:10, marginBottom:10
       
 },
 go_btn:{
       backgroundColor:'#9d9c9cff',borderWidth: 2,borderColor: 'black', 
       borderStyle: 'solid', 
       borderRadius:6, width:'20%',height:40, alignItems:'center', justifyContent:'center',
       
 },
 go_txt:{
       fontSize:16, color:'#FFFFFF'
 },
 input:{
       backgroundColor:'#FFFFFF',borderWidth: 2,borderColor: 'black', 
       borderStyle: 'solid', borderRadius:6, width:'67%', height:40
 },
 msgs_cont:{
        backgroundColor:'#8997a9ff', paddingTop:0, width:'100%', height:'90%',
        display:'flex', alignItems:'center', flexDirection:'column',
 },
 msg_div:{
       padding:40, backgroundColor:'#e8e8e8ff', color:'#FFFFFF',
       margin:2,borderWidth: 3,borderColor: 'black', borderStyle: 'solid', borderRadius:6, 
      
       
       
 },
 new_msg_txt:{
       color:'#377fd7ff'
 },
 msg_txt:{
       color:'#413d3dff'
 },
 title:{
        marginBottom:'14%', textAlign:'center', fontSize:20, backgroundColor:'#b1b1b1ff',
         padding:5
 },
 sender:{
       fontWeight:'bold'
 }
})