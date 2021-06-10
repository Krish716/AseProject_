import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Icon, Right,Button, Form } from 'native-base';
import { Avatar} from 'react-native-elements';
import * as firebase from "firebase";




export default class CameraScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      uid:''
    };
  }


   static navigationOptions = {
      title: "Home", 
      headerLeft:()=> null
    };

    SignOut =()=>{
       firebase
       .auth()
       .signOut()
       .then(()=>{
         this.props.navigation.navigate('Welcome')
       })
       .catch((err)=>{
          alert(err.message)
       })
    }

    OpenCamera = ()=>{
      this.props.navigation.navigate("Camera")
    }
    OpenPosting = ()=>{
      this.props.navigation.navigate("OnBoarding")
    }
    OpenRequest = ()=>{
      this.props.navigation.navigate("Request")
    }
    OpenNotifications = ()=>{
      this.props.navigation.navigate("Notifications")
    }

  

  

  render() {
    return (
      <View>
        <View style={styles.Header}>

<Avatar rounded icon={{ name: 'person', color: 'white' }} onPress={() => console.log("Wos!")} size="large" containerStyle={{ marginRight: 10 }} />
<Avatar rounded icon={{ name: 'notifications', color: 'white' }} onPress={()=>this.OpenNotifications()}
 size="large" />

<Avatar rounded icon={{ name: 'logout', color: 'white' }} onPress={() => this.SignOut()} size="large" containerStyle={{ marginLeft: 10 }} />

</View>
                
                <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', fontSize: 40, }}> Welcome!!</Text>
                    <Form style={styles.form}>
                    <Button
                        style={styles.button}
                        full
                        rounded
                        center
                        onPress={()=>this.OpenCamera()}

                    >
                        <Text style={styles.buttonText}>Scan Location</Text>
                    </Button>
                    <Button
                        style={styles.button}
                        full
                        center
                        rounded
                        onPress={()=>this.OpenPosting()}
                    >
                        <Text style={styles.buttonText}>Show postings</Text>
                    </Button>
                    <Button
                        style={styles.button}
                        full
                        center
                        rounded
                        onPress={()=>this.OpenRequest()}
                    >
                        <Text style={styles.buttonText}>Make a Request</Text>
                    </Button>
                </Form>
                </View>

            </View>



        );
    }
}
const styles = StyleSheet.create({
  Header: {
      width: '100%',
      height: '20%',
      marginTop: 20,
      backgroundColor: "black",
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
  },
  heading1: {
      fontSize: 100,
      fontWeight: 'bold',

  },
  form: {
      padding: 10,
      width: "85%",
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40,
      flex: 2
  },
  button: {
      justifyContent: 'space-around',
      marginBottom: 50,
      backgroundColor: '#000000',
      alignItems: 'center'
  },
  buttonText: {
      color: "#fff",
      fontFamily:'Roboto-Light',
      fontSize:16
  },
  Page: {
    flex:1,
    flexDirection:"column",
      justifyContent: 'center',
      alignItems: 'center',
  },
  container:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:80
  }
});