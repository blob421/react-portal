import { StyleSheet } from 'react-native';

export default StyleSheet.create({


 outer_div:{
        
         backgroundColor:'#f7eacfff', flex:1, 
 },
 search_cont:{
       flexDirection:'row', justifyContent:'center', alignItems:'center',
       height:'13%'
       
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
       borderStyle: 'solid', borderRadius:6, width:'67%', height:40, paddingLeft:9, margin:5
 },
 msgs_cont:{
        backgroundColor:'#99aac1ff', height:'87%',paddingTop:25,
        flexDirection:'column', 
 },
 msg_div:{
       padding:40, backgroundColor:'#f7f7f7ff', color:'#FFFFFF',
       margin:2,borderWidth: 3,borderColor: 'black', borderStyle: 'solid', borderRadius:26, 
      
       
       
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
 },
})