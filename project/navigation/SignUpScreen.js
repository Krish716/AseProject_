import React, { Component, useState } from 'react';
import { StyleSheet,View, Modal,Text,KeyboardAvoidingView,TouchableOpacity, ScrollView,SafeAreaView,ActivityIndicator } from 'react-native';
import { Form, Item, Input, Label, Button ,Icon} from "native-base";
import ValidationComponent from 'react-native-form-validator';

import * as firebase from "firebase";
import Terms from "./Terms";
import privacy  from './Privacy';




export default class SignUpScreen extends ValidationComponent {

  
  
  constructor(props) {
    super(props);
    this.state = {
      displayName:'',
       name:"",
       phonenumber:"",
       email:"",
       password:"",
       confirmPassword:"",
       hidePass:true,
       loading:false,
       terms:false,
       privacy:false
    };
  }


  handleSubmit(name,email,phonenumber,password,confirmPassword){
    if (password !== confirmPassword) {
          alert("Passwords don't match");
      } 
    else if(this.validate({
      name: {minlength:3, maxlength:7, required: true},
      email: {email: true,required:true},
      phonenumber: {minlength:10,maxlength:10,required:true},
    })){
      
     firebase.auth()
      .createUserWithEmailAndPassword(email,password)
      .then(authenticate=> {
        this.setState({
          loading:true,
        })
       return authenticate.user.updateProfile({
        displayName:phonenumber,
        })
        .then(()=>{
          firebase.database().ref('User/').push({
            name,
            phonenumber,
            email,
        })
          console.log(authenticate)
          this.props.navigation.navigate("Cities");
          this.setState({ 
            loading:false
          })
        })
        

      })
      .catch(err=>{
        alert(err.message)
      })
    }
  }

securePass= ()=>{
  this.setState({hidePass:!this.state.hidePass})

 }
 terms = ()=>{
  this.setState({terms:true})
}
termsClose = ()=>{
  this.setState({terms:false})
}
privacy =()=>{
  this.setState({privacy:true})
}
privacyclose = ()=>{
  this.setState({privacy:false})
}


  render() {
    if(this.state.loading){
      return(
        <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0D0D0D" />
        </View>
      )
    }
    else{
      return (
      <ScrollView  style={styles.container}>
      <KeyboardAvoidingView  style={styles.container}
      behavior="position"
      enabled>
      <View style={styles.logoContainer}>
      
      <View style={styles.error}>
       <Text style={styles.errortext}>
            {this.getErrorMessages()}
          </Text>
       </View>
       <Form style={styles.form}>
         <Item regular  style = {styles.item}>
           <Input
             ref="name"
             autoCorrect={false}
             autoCapitalize="none"
             placeholder="Name"
             keyboardType="name-phone-pad"
             onChangeText={name => this.setState({ name })}
           />
         </Item>
         <Item regular  style = {styles.item}>
         <Input
           ref="phonenumber"
           autoCorrect={false}
           autoCapitalize="none"
           placeholder="Phone Number"
           keyboardType="numeric"
           onChangeText={phonenumber => this.setState({ phonenumber })}
         />
       </Item>
         <Item regular  style = {styles.item}>
           <Input
             ref="email"
             autoCorrect={false}
             autoCapitalize="none"
             keyboardType="email-address"
             placeholder="Email"
             onChangeText={email => this.setState({ email })}
           />
         </Item>

         <Item regular  style = {styles.item}>
           <Input
             autoCorrect={false}
             autoCapitalize="none"
             keyboardType="name-phone-pad"
             placeholder="password"
             secureTextEntry={this.state.hidePass}
             onChangeText={password => this.setState({ password })}
           />
           <Icon
              name={this.state.hidePass?'eye':'eye-off-outline'}
              size={15}
              color="grey"
              onPress={()=>{this.securePass()}}
            />
         </Item>
         <Item regular  style = {styles.item}>
           <Input
             autoCorrect={false}
             autoCapitalize="none"
             placeholder="confirm password"
             keyboardType="name-phone-pad"
             secureTextEntry={this.state.hidePass}
             onChangeText={confirmPassword => this.setState({ confirmPassword })}
           />
         </Item>
         <Button
           style={styles.button}
           full
           rounded
           dark
           onPress={() => {
              this.handleSubmit(
                 this.state.name,
                 this.state.email,
                 this.state.phonenumber,
                 this.state.password,
                 this.state.confirmPassword,
                 )
           }}
         >
           <Text style={styles.buttonText}>Sign Up</Text>
         </Button>
         
       </Form>
       <View style={styles.footer}>
         <Text style={styles.licence}>
            <Text style={styles.licence}>By clicking on Signup, you confirm that you accept our</Text> 
            <TouchableOpacity onPress={() => {this.terms()}}>
                <Text style={[styles.licence, {color: '#0000ff'}]}>Terms of service</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.licence}>and</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => {this.privacy()}}>
            <Text style={[styles.licence, {color: '#0000ff'}]}>Privacy Policy</Text></TouchableOpacity>
            </Text>
          </View>
          <View>
          <Modal
          animationType= "slide"
          transparent={true}
          visible={this.state.terms}>
            <SafeAreaView>
          <ScrollView>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.title}> Terms and Conditions</Text>
              <Text>{Terms}</Text>
              <View style={styles.checkBoxContainer}>
            <TouchableOpacity style={[styles.continueButton, {backgroundColor: true ? 'dodgerblue' : 'grey'}]}
            onPress={() => {this.termsClose()}}
            >
              <Text>Continue</Text>
            </TouchableOpacity>

          </View>
            </View>
          </View>
          
          </ScrollView>
          </SafeAreaView>
        </Modal>
        <Modal
          animationType= "slide"
          transparent={true}
          visible={this.state.privacy}>
            <SafeAreaView>
          <ScrollView>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.title}> Privacy Policy</Text>
              <Text>{privacy}</Text>
              <View style={styles.checkBoxContainer}>
            <TouchableOpacity style={[styles.continueButton, {backgroundColor: true ? 'dodgerblue' : 'grey'}]}
            onPress={() => {this.privacyclose()}}
            >
              <Text>Continue</Text>
            </TouchableOpacity>

          </View>
            </View>
          </View>
          
          </ScrollView>
          </SafeAreaView>
        </Modal>
        </View>
      </View>

       
       
      </KeyboardAvoidingView>
      </ScrollView>
    );
    }
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
     marginTop: 20
   },
   buttonText: {
     color: "#fff",
     fontFamily:'Roboto-Light',
     fontSize:16
   },
   footer: {
     alignItems: "center"
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
  },
  licence:{
    padding: 10,
    textAlign:'center',
    fontFamily:'Roboto-Light',
    fontSize:14
   },
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView:{
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 20,
    padding: 20,
    alignItems: 'center'
  },
  title:{
    marginBottom:20,
    color: 'dodgerblue',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize: 14,
    fontFamily:'Roboto-Light',
  },
  checkBoxContainer:{
    flexDirection: 'row',
    marginVertical: 30,
    alignItems: 'center'
  },
  checkBox:{
    width: 30,
    height: 30,
    marginRight: 20,
  },
  continueButton: {
    marginTop: 20,
    padding: 20,
    borderRadius: 15
  }
 });