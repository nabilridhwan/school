import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Form1 extends Component {

  // Same as the below line in constructor
  // state = {textInput: ""};

  constructor(props){
    super(props);
    this.state = {
      textInput: ""
    }

    this.changeText = this.changeText.bind(this);
  }

  changeText(text){
    this.setState({textInput: text})
  }

  handleEndEditing = () => {
      console.log("Done editing")
  }

  render(){
    return(
      <View>
        <Text>Your input: {this.state.textInput}</Text>
        <TextInput placeholder="Type in something" onChangeText={this.changeText} value={this.state.textInput} onEndEditing={this.handleEndEditing} />
      </View>
    )
  }
  
}