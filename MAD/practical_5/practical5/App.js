/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View, Button, Text
} from 'react-native';


// Task 2
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  handlePress = () => {
    this.setState({counter: this.state.counter + 1})
  }

  componentDidUpdate(){
    console.log("Component Updated")
  }
  
  render() {
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <Button onPress={this.handlePress} title="Press to increment" />
      </View>
    )
  }
};