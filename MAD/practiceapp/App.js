import React from 'react';
import { View, Text, SectionList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// Practical 7 Task 1 and 2
export default function App() {
  const DATA = [
    {title: "C", data: ["Chan CC", "Clement Lee", "Candy Lim"]},
    {title: "B", data: ["Ben Tan", "Bee Hui"]},
    {title: "D", data: ["Danny Lee", "Donna Chen"]},
    {title: "E", data: ["Ethan", "Erica Pan"]},
    {title: "M", data: ["Melody", "Mandy Poon"]},
    {title: "S", data: ["Sonna Tay", "Sunny Pang", "Sherman Ang"]},
  ];

  const handleOnPress = (item) => {
    Alert.alert("Alert", item);
  }

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.listItemStyles} onPress={() => {handleOnPress(item)}}>
        <Text>{item}</Text>
      </TouchableOpacity>
    )
  }

  const renderSectionHeader = ({section}) => {
    return <Text style={styles.title} >{section.title}</Text>
  }


  return (
    <SectionList sections={DATA} renderItem={renderItem} renderSectionHeader={renderSectionHeader} keyExtractor={(item, index) => index}/>
  )
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: "darkblue",
    color: "white",
    fontSize: 20,
    padding: 5,
  },
  listItemStyles: {
    paddingTop: 5,
    paddingBottom: 5,
  }
});