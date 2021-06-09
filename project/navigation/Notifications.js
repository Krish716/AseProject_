import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import Task from "../navigation/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskswrapper}>
        
        <View style={styles.itmes}>
          <Task text={'The request has been accepted'}/>
          <Task text= {'Request rejected'}/>
          <Task text={'New Place added'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
  },
  taskwrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    paddingTop: 80,
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth:2,
  },
  itmes: {
    marginTop:30,
  },
});
