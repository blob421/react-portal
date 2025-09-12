import { cloneElement } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({


 outer_div:{
     
        backgroundColor:'#ffffffff', flex:1
},
message_div:{
   flex:0.91
},
 time_div:{
         display:'flex', flexDirection:'row', padding:10, height:'8%',
         backgroundColor:'#ebe6e6ff', alignItems:'center'
 },
 from_text:{
      width:'50%', justifyContent:'flex-start', paddingLeft:10,
 },
 date_text:{
      width:'50%', textAlign:'right', paddingRight:10
 },
 msg_text:{
          paddingTop: 30, padding:15, backgroundColor:'#FFFFFF', height:'83%'
          
      //  backgroundColor:'grey'
 },
 msg_title:{
         fontSize:15, backgroundColor:'#c7d6e2ff', height:'9%', 
         alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'center'
         
 },


 bottom_options:{
   backgroundColor:'#FFFFFF', alignItems:'center', flexDirection:'row', gap:'2%',
   justifyContent:'center', borderWidth: 2,borderColor: '#212121ff', borderStyle: 'solid', 
   flex:0.09
  },
  completed_btn:{
    padding:10,  borderWidth: 2,borderColor: '#212121ff', borderStyle: 'solid', 
    width:'31%', justifyContent:'center', alignItems:'center', 
  },
    overlay: {
    flex: 1,
    
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {

    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '87%',
    height:'65%',
  },
  header:{
    textAlign:'center', padding:10, fontSize:16
  },
  recipient_cont: {
    fontSize: 16,
    marginBottom: 10,
    height:'83%',
    marginTop:19
  },
  contacts_div:{
    padding:13, backgroundColor:'#ebe9e9ff', margin:1, borderRadius:5
  },
  username:{
   
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeText: {
    color: 'blue',
    bottom:0
  },
  modalContent2:{
    
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '87%',
    height:'20%',
  },
  forward_btns:{
     flexDirection:'row',
     gap:'30%',
     alignItems:'center',
     justifyContent:'center',
     height:'50%'
 },
 closeButton2:{
     borderWidth: 2,borderColor: '#212121ff', borderRadius:5, backgroundColor:'#a8a8a8ff',
     padding:15, width:'36%', justifyContent:'center', alignItems:'center'
 },
 header2:{
     textAlign:'center', height:'50%'
 },
 closeText2:{
     color:'#FFFFFF',
 }


  
})