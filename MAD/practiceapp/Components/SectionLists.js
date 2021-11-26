import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
// Class Practice SectionList 22 November 2021
export default function App() {

  const [userInput, setUserInput] = useState('');

  const handleEndEditing = (e) => {
    setUserInput(e.nativeEvent.text);
    Alert.alert("Message Typed", e.nativeEvent.text);
  }

  return (
    <View>
      <Text>{userInput}</Text>
      <TextInput placeholder="Search" onEndEditing={handleEndEditing} />
      <SectionList
        sections={[
          { title: 'A', data: ['Apple', 'Apricot', 'Avocado'] },
          { title: 'B', data: ['Banana', 'Blueberry', 'Blackberry'] },
          { title: 'C', data: ['Coconut', 'Cherry', 'Clementine'] },
          { title: 'D', data: ['Durian', 'Dragonfruit', 'Date'] },
          { title: 'E', data: ['Elderberry', 'Fig', 'Eggplant'] },
          { title: 'F', data: ['Fennel', 'Fruitcake', 'Fig'] },
          { title: 'G', data: ['Grape', 'Grapefruit', 'Grapes'] },
          { title: 'H', data: ['Honeydew', 'Huckleberry', 'Honey'] },
        ]}

        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 28,
    padding: 10,
    backgroundColor: "darkblue",
    color: "white",
  },

  item: {
    fontSize: 20,
    padding: 5,
    color: "darkblue"
  }
})