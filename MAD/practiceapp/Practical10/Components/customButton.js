/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Practical - Custom Button
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CustomButton extends Component {

    render() {
        const { text, onPress} = this.props;
        return (
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => onPress()}
          >
             <Text style={styles.textStyle}>{text}</Text>
          </TouchableOpacity>
        );
    }
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize:24,
    color: '#ffffff',
    textAlign: 'center'
  },
  
  buttonStyle: {
    padding:10,
    backgroundColor: 'blue',
    borderRadius:5
  }
});
