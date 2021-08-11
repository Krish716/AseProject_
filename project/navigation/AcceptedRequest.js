import React, { Component } from 'react';
import { StyleSheet,View, Text,FlatList} from 'react-native';
import { Button ,Card,CardItem,Body,Right,Icon} from "native-base";
import * as firebase from "firebase";




export default class AcceptedRequest extends Component {

   
  constructor(props) {
    super(props);
    this.state ={
       name:"",
       phonenumber:"",
       address:"",
       store:"",
       category:"",
       todos:{},
       list:[]
    }

    
   
  }





  componentDidMount(){

    firebase.database().ref('Accepted/').on('value', querySnapShot => {
      let todos = Object.values( querySnapShot.val())
      this.setState({
        todos
      });
      // console.log(this.state.todos)
    });
  }
  render() {  
      return (
        <View>
        <FlatList style={{width:'100%'}}
        data={this.state.todos}
        keyExtractor={(item)=>item.id}
        // keyExtractor={({ id }, item) => id}
        renderItem={({item})=>{
           return(
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.text}>name: {item.name}</Text>
                 <Text style={styles.text}>address: {item.address}</Text>
                 <Text style={styles.text}>Phonenumber: {item.phonenumber}</Text>
                 <Text style={styles.text}>Store: {item.store}</Text>
                 <Text style={styles.text}>Category: {item.category}</Text>
              </Body>
            </CardItem>
          </Card>
              )
           }}/>

       </View>
);
}
}

const styles = StyleSheet.create({
    space:{
      margin:10
    },
    color:{
      color:"#fff",
      fontFamily:'Roboto-Light',
      fontSize:16
    },
    text:{
      fontFamily:'Roboto-Light',
      fontSize:16
    },
    
  });