import React, { Component } from 'react';
import { StyleSheet,View, Text,KeyboardAvoidingView,TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';
import { Form, Item, Input, Label, Button ,Icon} from "native-base";

export default class ReceivedRequests extends Component {
    constructor(props) {
        super(props);
       
      }

      render() {
          return (
          <ScrollView  style={styles.container}>
          <KeyboardAvoidingView  style={styles.container}
          behavior="position"
          enabled>
          <View style={styles.logoContainer}>
          
           <Form style={styles.form}>
             <Item regular  style = {styles.item}>
               <Input
                 ref="name"
                 autoCorrect={false}
                 autoCapitalize="none"
                 placeholder="Charles"
                 keyboardType="name-phone-pad"
               />
             </Item>
             <Item regular  style = {styles.item}>
             <Input
               ref="phonenumber"
               autoCorrect={false}
               autoCapitalize="none"
               placeholder="+1 (519) 992-6345"
               keyboardType="numeric"
             />
           </Item>
             <Item regular  style = {styles.item}>
               <Input
                 ref="address"
                 autoCorrect={false}
                 autoCapitalize="none"
                 keyboardType="name-phone-pad"
                 placeholder="1550, Huron Church Road"
               />
             </Item>
             <Item regular  style = {styles.item}>
               <Input
                 ref="store"
                 autoCorrect={false}
                 autoCapitalize="none"
                 keyboardType="name-phone-pad"
                 placeholder="Fresh co"
               />
             </Item>
             <Item regular  style = {styles.item}>
               <Input
                 ref="category"
                 autoCorrect={false}
                 autoCapitalize="none"
                 keyboardType="name-phone-pad"
                 placeholder="Grocery"
               />
             </Item>
             <View style={styles.contain}>
             <Button
           style={styles.button}
           full
           dark
           rounded>
           <Text style={styles.buttonText}>Accept</Text>
         </Button>
         <Button
           style={styles.button}
           full
           dark
           rounded>
           <Text style={styles.buttonText}>Reject</Text>
         </Button>
         </View>
             </Form>
             </View>

       
       
      </KeyboardAvoidingView>
      </ScrollView>
    
    );
    }
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 50,
      marginBottom: 20
    },
    contain: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    item:{
       margin:10,
    },
    form: {
      padding: 20,
      width: "100%"
    },
    button: {
      marginTop: 30
    },
    buttonText: {
      color: "#fff",
      padding: 30,
      fontFamily:'Roboto-Light',
      fontSize:20
    },
    footer: {
      alignItems: "center"
    },
    licence:{
     padding:10,
     textAlign:'center',
     fontFamily:'Roboto-Light',
     fontSize:16
    },
    error:{
      alignItems:"center",
      justifyContent:"center"
    },
    errortext:{
      color:"#BF3325"
    },
    loading: {
      left: 0,
     right: 0,
     top: 0,
     bottom: 0,
     position: 'absolute',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#fff'
   }
  });   