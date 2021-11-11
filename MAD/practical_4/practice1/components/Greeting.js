import React from "react";
import {View, Text} from "react-native";

export default class Greeting extends React.Component{
    render(){
        return(
            <View>
                <Text style={{marginTop: 10}}>Hello {this.props.StudentName}</Text>
            </View>
        )
    }
}