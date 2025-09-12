import { StyleSheet } from 'react-native';

export default StyleSheet.create({
       
 outer_div:{
       position: 'absolute', top: 0, left: 0,right: 0,bottom: 0,
       alignItems: 'center', backgroundColor:'#f7eacfff'
},
 title : {
       padding:15, borderRadius:10, color:'#000000ff', 
       marginTop:2, fontSize:25
},
 border_msg : {
       backgroundColor:'#8a684dff', height:'79%', width:'100%', justifyContent:'center', 
       alignItems:'center', padding:11, paddingBottom:30, paddingTop:20,
       
 },
 pinned_msg: {
       height:'90%', backgroundColor:'#FFFFFF',padding:10,paddingTop:20
       
 },
 profile_div:{
 backgroundColor:'#8a684dff', width:'100%', height:'20%', alignItems:'center'
 },
 profile_btn:{
      backgroundColor:'#eceaeaff',
      padding:10, width:'25%', alignItems:'center'
 }
 
})