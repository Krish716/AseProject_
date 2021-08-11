import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity ,ScrollView,useEffect,FlatList} from 'react-native';
import * as firebase from "firebase";
import { Card,CardItem,Body,Right,Icon} from "native-base";





function RejectedRequestScreen ({navigation,route}) {
    const {title,name,phonenumber,address,store,category} = route.params;
    
    const [todo,settodo] = useState();

   const SignOut =()=>{
        firebase
        .auth()
        .signOut()
        .then(()=>{
          navigation.navigate('Welcome')
        })
        .catch((err)=>{
           alert(err.message)
        })
     }
     const acceptedItem = ()=>{
        firebase.database().ref('Rejected/').on('value', querySnapShot => {
            let list = Object.values(querySnapShot.val());
            settodo(list)
            console.log(todo)
          });
     }


     const accept = ()=>{
       firebase.database().ref('Rejected/').push({
           name,
           phonenumber,
           address,
           store,
           category
        }).then((data)=>{
            //   console.log(data)
          }).catch((error)=>{
              //error callback
              console.log( error)
          })
     }

     React.useEffect(() => {
        acceptedItem()
        accept()
 }, [])


    React.useLayoutEffect(()=>{
        navigation.setOptions({
            title:title,
          headerRight:()=>(<TouchableOpacity onPress={()=>{SignOut()}}><View style={styles.container}><Text style={styles.logoutText}>LogOut</Text></View></TouchableOpacity>)
        })
      },[navigation,route,accept]);
    return (    
        <View>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>{title}</Text>           
            </View> 
            <FlatList style={{width:'100%'}}
            data={todo}
            keyExtractor={(item)=>item.id}
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

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        height: '15%',
        backgroundColor: "black",
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'   
    },
    Container:{
        width:'100%',
        height:'85%',
        padding:5,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    box:{
        width:'100%',
        height:'20%',
        padding:5
    },
    inner:{
        flex: 1,
        backgroundColor:'#eee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderText:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    Button:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        fontSize:20
    },
    logoutText:{
        paddingRight:20,
        fontFamily:'Roboto-Bold',
        fontSize:17
     
    }
});

export default RejectedRequestScreen;