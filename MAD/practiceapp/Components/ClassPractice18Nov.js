import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}></View>
      <View style={styles.yellowBox}>
        <View style={styles.blueBox}></View>
        <View style={styles.greyBox}></View>
        <View style={styles.purpleBox}></View>
      </View>
      <View style={styles.greenBox}>

        <Text style={styles.myTextBox}>Text box 1</Text>
        <Text style={styles.myTextBox}>Text box 2</Text>
        <Text style={styles.myTextBox}>Text box 3</Text>
      </View>
    </View>
  )
}


// Container is flex 1 because it is not sharing screen size with anything else hence it is flex 1 and will take up the whole height
const styles = StyleSheet.create({

  redBox: {
    flex: 1,
    backgroundColor: 'red',
  },
  yellowBox: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },

  greenBox: {
    flex: 3,
    backgroundColor: 'green',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'
  },

  blueBox: {
    flex: 1,
    backgroundColor: 'blue',
  },

  greyBox: {
    flex: 1,
    backgroundColor: 'grey',
  },

  purpleBox: {
    flex: 2,
    backgroundColor: 'purple',
  },

  container: {
    flex: 1
  },

  myTextBox:{
    textAlign: 'center',
    backgroundColor: 'white',
    height: 100,
    borderRadius: 10,
    fontSize: 22
  }
});

const showAlert = () => {
  console.log("Pressed!")
  return (
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      }
    )
  )
}