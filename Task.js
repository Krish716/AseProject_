import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";


const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.button}>
        <Button title="X" ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  itemText: {
    fontSize: 14,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color:'#ffcccb'
  },
  
});
export default Task;
