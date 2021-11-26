import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
// Class Practice FlatLists 22 November 2021
export default function App() {

  const items = [
    {
      id: 1,
      data: {
        item1: 'Heading Item 1',
        item2: 'Description Item 1'
      }
    },
    {
      id: 2,
      data: {
        item1: 'Heading Item 2',
        item2: 'Description Item 2'
      }
    },
    {
      id: 3,
      data: {
        item1: 'Heading Item 3',
        item2: 'Description Item 3'
      }
    },
    {
      id: 4,
      data: {
        item1: 'Heading Item 4',
        item2: 'Description Item 4'
      }
    },
    {
      id: 5,
      data: {
        item1: 'Heading Item 5',
        item2: 'Description Item 5'
      }
    },
    {
      id: 6,
      data: {
        item1: 'Heading Item 6',
        item2: 'Description Item 6'
      }
    },
    {
      id: 7,
      data: {
        item1: 'Heading Item 7',
        item2: 'Description Item 7'
      }
    },
    {
      id: 8,
      data: {
        item1: 'Heading Item 8',
        item2: 'Description Item 8'
      }
    },
    {
      id: 9,
      data: {
        item1: 'Heading Item 9',
        item2: 'Description Item 9'
      }
    },
    {
      id: 10,
      data: {
        item1: 'Heading Item 10',
        item2: 'Description Item 10'
      }
    },
    {
      id: 11,
      data: {
        item1: 'Heading Item 11',
        item2: 'Description Item 11'
      }
    },
    {
      id: 12,
      data: {
        item1: 'Heading Item 12',
        item2: 'Description Item 12'
      }
    },
    {
      id: 13,
      data: {
        item1: 'Heading Item 13',
        item2: 'Description Item 13'
      }
    },
    {
      id: 14,
      data: {
        item1: 'Heading Item 14',
        item2: 'Description Item 14'
      }
    },
    {
      id: 15,
      data: {
        item1: 'Heading Item 15',
        item2: 'Description Item 15'
      }
    },
  ]

  renderItem = ({item}) => {
    return (
      <View style={styles.itemStyle}>
        <Text style={styles.headingStyle}>{item.data.item1}</Text>
        <Text style={styles.textStyle}>{item.data.item2}</Text>
      </View>
    )
  }

  
  return (
    <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.id} />
  )
}

const styles = StyleSheet.create({
  itemStyle: {
    backgroundColor: "lightblue",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },

  textStyle: {
    fontSize: 20
  },

  headingStyle: {
    fontSize: 28,
    fontWeight: "bold"
  }
})