import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Button, Alert, TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY_NAME = "@save_name";
const STORAGE_KEY_PASSWORD= "@save_password";

export default ({}) => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const saveData = async () => {
        try{
            await AsyncStorage.setItem(STORAGE_KEY_NAME, name);
            await AsyncStorage.setItem(STORAGE_KEY_PASSWORD, password);
            alert("Saved"); 
        }catch(e){
            alert("Data could not be saved");
            console.log(e);
        }
    }

    const getData = async () => {
        try{
            const savedName = await AsyncStorage.getItem(STORAGE_KEY_NAME);
            const savedPassword = await AsyncStorage.getItem(STORAGE_KEY_PASSWORD);
        }catch(e){
            alert("Data could not be saved");
            console.log(e);
        }
    }

    const onSubmit = () => {
        if(name != "" && password != ""){
            saveData();
            setName("");
            setPassword("");
        }
    }
    
    return(
        <View>
            <Text>Home Screen</Text>

            <TextInput placeholder="Enter your username" value={name} onChangeText={(text) => setName(text)} onSubmitEditing={onSubmit}/>
            <TextInput placeholder="Enter your password" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} onSubmitEditing={onSubmit} />

            <Button title="Save" onPress={onSubmit}/>
        </View>
    )
}