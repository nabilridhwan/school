import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import * as RNFS from 'react-native-fs';

export default App = () => {
  
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  

  getMovies =  () => {
    RNFS.readFile('/storage/10F1-0917/DATA/movies.json', 'ascii')
    .then((res) => {
        console.log(res);
        const d = JSON.parse(res);
        setTitle(d.title);
        setDescription(d.description);
        setData(d.movies);
    })
    .catch((err) => {
        console.log(err.message, err.code);
    });
}

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
        <Text>Title {title} </Text>
        <Text>Description {description} </Text>
        <Text></Text>
        <Text></Text>
      <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
    
    </View>
  );
};
