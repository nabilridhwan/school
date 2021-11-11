import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';

// Task 1
function GreetingByName(props){
  return(
    <Text style={styles.greetingStyle} >Hello {props.name}!</Text>
  )
}

function ShowDate(){
  return(
    <Text style={styles.dateStyle}>Today's Date: {moment().format("LL")}</Text>
  )
}

export default function App(){
  return(
    <View style={styles.mainView}>
      <GreetingByName name="Nabil"/>
      <ShowDate/>
    </View>
  )
}

const styles = StyleSheet.create({
  dateStyle: {
    fontSize: 20,
    color: 'blue',
    textAlign: "center"
  },

  greetingStyle: {
    textAlign: "center"
  },

  mainView: {
    marginTop: 10,
  }
})