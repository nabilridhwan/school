import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Form2(props){

  // Same as the below line in constructor
  // state = {textInput: ""};

  let [textInput, setTextInput] = useState("");

  const changeText = (text) => {
    setTextInput(text);
  }

  const handleEndEditing = () => {
    console.log("Done editing")
  }

  return (
    <View>
      <Text>Your input: {textInput}</Text>
      <TextInput placeholder="Type in something" onChangeText={changeText} value={textInput} onEndEditing={handleEndEditing} />
    </View>
  )

}