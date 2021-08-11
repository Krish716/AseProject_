import React from 'react';

import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as firebase from "firebase";





export default Reqscreen =({navigation}) => {

  return (
    
    <View>
    <View style={styles.head}>
     <Text style={styles.maintext}>HOME PAGE </Text>
     <TouchableOpacity
     onPress={()=>{navigation.navigate("Cities")}}>
       <Text style={styles.logouttxt}>Logout</Text>
       </TouchableOpacity>
    </View>


    <View style={styles.content}>
      <TouchableOpacity style={styles.button}
       onPress={()=>{navigation.navigate("ReceivedRequests")}}>
      <Text style={styles.btntxt}>Show Requests</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}
      onPress={()=>{navigation.navigate("AcceptedRequest")}}>
        <Text style={styles.btntxt}>Accepted Requests</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={()=>{navigation.navigate("RejectedRequest")}}>
      <Text style={styles.btntxt}>Rejected Requests</Text>
      </TouchableOpacity>
    </View>

   </View>
  );
}


const styles= StyleSheet.create({
  
  content:{
justifyContent:'center',
alignContent:'center',
alignItems:'center',

  },

  head:{
    flexDirection:'row',
    justifyContent:'flex-end',
    height: 70,
    width:'100%',
    backgroundColor:'#000000',
    marginTop:50,
    
  },

  button:{
    width:280,
    height:60,
    backgroundColor:'#000000',
    margin:50,
    borderRadius:60,
    shadowOffset:{width:10,height:20},
    shadowOpacity: 0.5,
    shadowRadius: 60,
    shadowColor:'#2d3436'
  },
logouttxt:{
  color:'#ffffff',
  fontSize:17,
  fontFamily:'Roboto-Light',
  textAlign:'right',
  paddingTop:25,
  paddingEnd:10,
  marginLeft:40,
  
},
  maintext:{
    color:'#ffffff',
    fontSize:25,
    textAlign:'center',
    fontFamily:'Roboto-Light',
    justifyContent:'center',
    marginLeft:20,
    fontWeight:'700',
    top:20, 
  },

  btntxt:{
    color:'#ffffff',
    fontSize:20,
    fontFamily:'Roboto-Light',
    textAlign:'center',
    justifyContent:'center',
    padding:15,
  }
})