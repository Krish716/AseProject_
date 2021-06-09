import React, { Component } from 'react';
import { StyleSheet,View, Text,KeyboardAvoidingView,TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';
import { Form, Item, Input, Label, Button ,Icon} from "native-base";

export default class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
           name:"",
           phonenumber:"",
           address:"",
           store:"",
           category:"",
        };
      }
      handleSubmit(){
        alert("submitted successful" );
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
                 placeholder="Name"
                 keyboardType="name-phone-pad"
               />
             </Item>
             <Item regular  style = {styles.item}>
             <Input
               ref="phonenumber"
               autoCorrect={false}
               autoCapitalize="none"
               placeholder="Phone Number"
               keyboardType="numeric"
             />
           </Item>
             <Item regular  style = {styles.item}>
               <Input
                 ref="address"
                 autoCorrect={false}
                 autoCapitalize="none"
                 keyboardType="name-phone-pad"
                 placeholder="Address"
               />
             </Item>
             <Item regular  style = {styles.item}>
               <Input
                 ref="store"
                 autoCorrect={false}
                 autoCapitalize="none"
                 keyboardType="name-phone-pad"
                 placeholder="Store"
               />
             </Item>
             <Item regular  style = {styles.item}>
               <Input
                 ref="category"
                 autoCorrect={false}
                 autoCapitalize="none"
                 keyboardType="name-phone-pad"
                 placeholder="Category"
               />
             </Item>
             
             <Button
          style={styles.button}
          full
          rounded
          dark
          onPress={() => {
             this.handleSubmit(
                )
          }}>
           <Text style={styles.buttonText}>Submit</Text>
         </Button>
         
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
        fontFamily:'Roboto-Light',
        fontSize:16
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