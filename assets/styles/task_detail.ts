import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 outer_div:{
     
        backgroundColor:'#ffffffff', flex:1
},
 task_cont:{
   flex:1
 },

 task_div:{
     padding:20, margin:1, borderRadius:5,
      borderWidth: 3,borderColor: '#212121ff', borderStyle: 'solid',
      backgroundColor:'#ffffffff'
 },
 description:{
   paddingTop:15, backgroundColor:'#FFFFFF', paddingBottom:10, padding:13, flex:1
 },
 task_name:{
   alignItems:'center', justifyContent:'center', height:'10%', backgroundColor:'#c7d6e2ff'
 },
 bottom_options:{
   backgroundColor:'#FFFFFF', alignItems:'center', flexDirection:'row', gap:'2%',
   justifyContent:'center', borderWidth: 2,borderColor: '#212121ff', borderStyle: 'solid', 
   flex:0.1
  },
  completed_btn:{
    padding:10,  borderWidth: 2,borderColor: '#212121ff', borderStyle: 'solid', 
    width:'31%', justifyContent:'center', alignItems:'center', 
  }
})