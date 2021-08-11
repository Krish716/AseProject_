import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity} from "react-native";
import { Icon } from "native-base";



export default  Notifications = ({navigation,route}) =>{


   const {title,phonenumber} = route.params; 

   const Close =()=>{
      navigation.navigate('Cities')
   }
  return (
    <View style={styles.container}>

        <View style={styles.items}>
        <Text style={styles.color}>{title}</Text>
        <Text style={styles.color}>{phonenumber}</Text>
        <TouchableOpacity onPress={()=>{Close()}}>
        <Icon name="close" size={1} style={styles.person}></Icon>
        </TouchableOpacity>
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
  },
  color:{
    fontFamily:'Roboto-Light',
    fontSize:16
  },
  items: {
     flexDirection:'row',
     justifyContent:'space-between',
     margin:10,
  },
  icon:{
     textAlign:'right'
  }
});