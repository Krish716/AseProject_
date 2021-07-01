import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import HomeScreen from "./navigation/HomeScreen";
import CameraScreen from "./navigation/CameraScreen";
import Location from "./navigation/Location";
import SigInScreen from "./navigation/SigInScreen";
import AdminScreen from "./navigation/AdminScreen";
import Camera from "./navigation/Camera";
import ReceivedRequests from "./navigation/ReceivedRequests";
import Request from "./navigation/Request";
import OnBoarding from './navigation/OnBoarding';
import Reqscreen from './navigation/Reqscreen';
import ReceivedRequestsScreen from './navigation/ReceivedRequestsScreen';
import Notifications from './navigation/Notifications';


import * as firebase from "firebase";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBVZmfOXFASWBmEandPj_N-778nQSWxmTk",
  authDomain: "smart-5f720.firebaseapp.com",
  projectId: "smart-5f720",
  storageBucket: "smart-5f720.appspot.com",
  messagingSenderId: "937200982084",
  appId: "1:937200982084:web:38f8553f28e854b2c24411",
  measurementId: "G-KW10WJG6HN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded:false,
    };
  }
  async loadFonts(){
    await Font.loadAsync({
      'Roboto-Light':require("./assets/font/Roboto-Light.ttf"),
      'Roboto-Bold':require('./assets/font/Roboto-Bold.ttf'),
    });
    this.setState({fontLoaded:true})
  }

  componentDidMount(){
    this.loadFonts();
  }
  render(){
    if(this.state.fontLoaded){
  return(
    <NavigationContainer>
    <Stack.Navigator style={styles.container} >
      <Stack.Screen name="Welcome" component={HomeScreen} options={({navigation,route})=>({headerTitle:"Welcome",headerTitleStyle:{ fontFamily:'Roboto-Bold',
      fontSize:16}})}/>
      <Stack.Screen name ="Cities" component={CameraScreen} options={{headerTitle:"Home",headerLeft:()=>null,headerTitleStyle:{ fontFamily:'Roboto-Bold',
      fontSize:16}}}/>
      <Stack.Screen name ="SignIn" component={SigInScreen} />
      <Stack.Screen name ="Admin" component={AdminScreen} />
      <Stack.Screen name ="Camera" component={Camera} />
      <Stack.Screen name ="Location" component={Location} />
      <Stack.Screen name ="Received" component={ReceivedRequests} />
      <Stack.Screen name ="Request" component={Request} />
      <Stack.Screen name ="OnBoarding" component={OnBoarding} />
      <Stack.Screen name ="Reqscreen" component={Reqscreen} />
      <Stack.Screen name ="Notifications" component={Notifications} />
      <Stack.Screen name ="ReceivedRequestsScreen" component={ReceivedRequestsScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
 }
 else{
   return null;
 }
  }
}
    
    
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'Roboto-Bold',
    fontSize:16
  },
});