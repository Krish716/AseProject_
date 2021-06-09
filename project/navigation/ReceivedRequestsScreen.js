import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';


function ReceivedRequestsScreen(props) {
    return (    
        <View>
            <View style={styles.Container}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Potter</Text>
                        <Text>Wands Collection</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Mandy Stone</Text>
                        <Text>Mandy Chocolate Shop</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Paul Lisman</Text>
                        <Text>Hitman Clothing Store</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Nick Khan</Text>
                        <Text>Nick's Sports Store</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Pinkman</Text>
                        <Text>Used Cars Seller</Text>
                    </View>
                </View>
            </View> 


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
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        fontSize:20
    }
});

export default ReceivedRequestsScreen;