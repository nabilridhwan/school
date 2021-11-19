import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, Button, TouchableOpacity } from 'react-native';

// Practical 6 Task 2 Page 1
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>My Mobile App</Text>

        <TextInput style={styles.textInputStyle} placeholderTextColor="white" placeholder="Email" />
        <TextInput style={styles.textInputStyle} placeholderTextColor="white" placeholder="Password" />

        <Text style={styles.forgetPassword}>Forget Password?</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.signUp}>SIGN UP</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faeee0",
    justifyContent: "center",
  },

  formContainer: {
    margin: 30,
  },



  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff00ff",
  },

  forgetPassword: {
    textAlign: "center",
    color: "red",
    marginBottom: 50,
  },

  textInputStyle: {
    backgroundColor: "#f9cf93",
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50,
  },

  button: {
    borderRadius: 100,
    backgroundColor: "#dbd0c0",
    padding: 10,
  },

  buttonText: {
    textAlign: "center",
  },

  signUp: {
    textAlign: "center",
    marginTop: 10,
  },
})