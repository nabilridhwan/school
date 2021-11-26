import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
// Class Practice Touchables 22 November 2021
export default function App() {


  const [count, setCount] = useState(0);

  const handlePress = () => {
    const newCount = count + 1;
    setCount(newCount);
    Alert.alert("Button Pressed", `The button is pressed ${newCount} times!`, [
      {
        text: "Ok",
      },
    ], { cancelable: true })
  }

  const handleLongPress = () => {
    setCount(0);
    Alert.alert("Button Long Pressed", "The button is reset!", [
      {
        text: "Ok",
      },
    ], { cancelable: true })
  }

  return (
    <View>
      <TouchableHighlight underlayColor="yellow" onPress={() => console.log("Button Pressed")}>
        <Text style={styles.style1}>Touch to change color</Text>
      </TouchableHighlight>

      <TouchableOpacity onPress={handlePress} onLongPress={handleLongPress}>
        <Text style={styles.style1}>Touch to change opacity</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  style1: {
    padding: 15,
    fontSize: 20,
  }
})