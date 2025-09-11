import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  top_div : {
     display:'flex', flexDirection:'row',
     backgroundColor:'#7b7b7bff'
  },
  image:{
    width:'35%', height:130,borderWidth: 1,borderColor: '#212121ff', 
   borderStyle: 'solid',
  },
 username:{
  display:'flex', alignItems:'center', justifyContent:'center', width:'32.5%', 
  borderWidth: 1,borderColor: '#212121ff', borderStyle: 'solid',
 },
 change_pic_cont:{
  height:'17%', backgroundColor:'#717171ff', display:'flex', 
  flexDirection:'row', 
 },
 pic_btn:{
   backgroundColor:'#bfbebeff', width:'35%', padding:5, height:'100%', 
   alignItems:'center', justifyContent:'center', borderWidth: 1,borderColor: '#212121ff', 
   borderStyle: 'solid',

 },
 text_color:{
  color:'#FFFFFF'
 },
 profile_middle: {
  backgroundColor:'#686666ff', height:125, display:'flex', flexDirection:'row',
 },
 info_block:{
   alignItems:'center',  width:'35%', justifyContent:'center', display:'flex', height:'100%',
   gap:15, borderWidth: 1,borderColor: '#212121ff', borderStyle: 'solid',
 },
  info_block2:{
     alignItems:'center', width:'32.5%', justifyContent:'center', display:'flex', height:'100%',
   gap:15, borderWidth: 1,borderColor: '#212121ff', borderStyle: 'solid', textAlign:'justify'
  },
 text_white:{
     color:'#FFFFFF', fontSize:13,
 },
 team_text:{
     color:'#FFFFFF', fontSize:20
 },
 team_cont:{
    width:'65%', justifyContent:'center', alignItems:'center',
    borderWidth: 1,borderColor: '#212121ff', borderStyle: 'solid',
 },
 modal:{
  backgroundColor:'#FFFFFF', width:2000
 },

  container: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    width: 50,
    height: 50,
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
    height:'20%',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    height:'55%',
    marginTop:12
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeText: {
    color: 'blue',
    bottom:0
  },
  star_cont:{
    display:'flex', flexDirection:'row', backgroundColor:'#bfbebeff', width:'67.5%',
     alignItems:'center', justifyContent:'center',  borderWidth: 1,borderColor: '#212121ff', 
     borderStyle: 'solid', boxShadow:'white'
  }



})