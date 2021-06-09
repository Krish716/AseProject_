import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function reqscreen() {

  
    const [loaded] = useFonts({
      Roboto: require('./assets/fonts/Roboto-Black.ttf'),
    });
    
    if (!loaded) {
      return null;
    }
  return (
    
    <View>
    <View style={styles.head}>
     <Text style={styles.maintext}>HOME PAGE </Text>
     <TouchableOpacity>
       <Text style={styles.logouttxt}>Logout</Text>
       </TouchableOpacity>
    </View>


    <View style={styles.content}>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.btntxt}>Show Requests</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntxt}>Accepted Requests</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
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
  textAlign:'right',
  paddingTop:25,
  paddingEnd:10,
  marginLeft:40,
  
},
  maintext:{
    color:'#ffffff',
    fontSize:25,
    textAlign:'center',
    justifyContent:'center',
    marginLeft:20,
    fontWeight:'700',
    top:20, 
  },

  btntxt:{
    color:'#ffffff',
    fontSize:20,
    textAlign:'center',
    justifyContent:'center',
    padding:15,
  }
})

