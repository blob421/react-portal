import { StyleSheet } from 'react-native';

export default StyleSheet.create({

 inputs : {
        marginBottom: 10, borderWidth: 1, padding: 15, backgroundColor:'#FFFFFF', 
        borderColor:'grey', borderRadius:3
 },
 outer_div:{
        position: 'absolute', top: 0, left: 0,right: 0,bottom: 0,
        alignItems: 'center', backgroundColor:'#f7eacfff',
 },
 form_div:{
        width: '85%', paddingTop: 60, borderRadius: 10,
      //  backgroundColor:'grey'
 },
 title:{
       textAlign:'center', fontSize:18, backgroundColor:'#f9f6f6ff',
        padding:15, width:240, color:'#645842ff'
 },
  login_btn:{
      backgroundColor:'#f5f1eaff', alignItems:'center',
      padding:15, borderRadius:10, borderWidth: 1.5, borderColor:'#000000ff', 
      marginTop:20, width:130
     
  },
  title_div:{
       width:'100%', alignItems:'center', backgroundColor:'#9c795eff', height:'15%', 
       justifyContent:'center', marginBottom:25
  },
  btn_div:{

       width:'100%', alignItems:"flex-end"
  },
  login_text:{
      fontSize:13
  },
 bottom_banner: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 50,
  backgroundColor: '#9c795eff',
  
  
},
})