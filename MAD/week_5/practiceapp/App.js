import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Form1 from './Components/Form1';
import Form2 from './Components/Form2';

export default class App extends Component {



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Class Components</Text>
        <Form1 />

        <Text style={styles.title}>Function Components</Text>
        <Form2 />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#000"
  },

  container: {
    margin: 10
  }
});