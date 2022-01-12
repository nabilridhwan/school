/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Practical - Custom Label
 */
import React from 'react';
import { View, StyleSheet, Text, Alert} from 'react-native';
import CustomButton from './Components/customButton';
import MyTextInput from './Components/customLabel';

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          margin: 20,
          justifyContent: 'center',
        }}>

            <Text style={styles.mainLabel}>User Login Page</Text>

        <MyTextInput placeholder="Admin ID"/>
        <MyTextInput placeholder="Admin Password"/>

        <CustomButton text="Admin Login" onPress={() => {Alert.alert("Button Pressed")}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainLabel: {
        fontSize: 40,
        fontWeight: "bold",
        color: "royalblue",
    }
})