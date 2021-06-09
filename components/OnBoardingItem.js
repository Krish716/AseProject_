import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

export default OnBoardingItem =({item}) => {
    const {width} = useWindowDimensions();
    return(
        <View style = {styles.container, {width}}>
            <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}]}/>
            <View style={{flex: 5}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex : 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 5,
        justifyContent: 'center',
        
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
    },
    category: {
        fontWeight: '500',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        paddingHorizontal: 64,
        color: '#62656b',
        textAlign: 'center',
    },
});