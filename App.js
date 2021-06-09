import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import OnBoarding from './components/OnBoarding';
import slides from './slides';
  
const backImg = './assets/rover.jpeg';
export default function App() {
  return (
    <View style={styles.container}>
      <OnBoarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
