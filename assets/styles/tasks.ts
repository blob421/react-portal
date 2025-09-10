import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 outer_div:{
       position: 'absolute', top: 0, left: 0,right: 0,bottom: 0,
        backgroundColor:'#f7eacfff'
},
 tasks_cont:{
  width:'100%', marginTop:28, display:'flex',  
 },

 task_div:{
     padding:20, margin:1, borderRadius:7,
      borderWidth: 3,borderColor: '#212121ff', borderStyle: 'solid',
      backgroundColor:'#c9c9c9ff'
 },
 date_text:{
   paddingTop:10
 },
})