/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Practical - Custom Label
 */
import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from "prop-types"; 

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

export default class MyTextInput extends Component {
  state = {
    isFocused: false
  };

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, placeholder } = this.props;
    return (
      <TextInput
        selectionColor={BLUE}
        underlineColorAndroid={
          isFocused ? BLUE : LIGHT_GRAY
        }
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        style={styles.textInput}
        placeholder={placeholder}
      />
    );
  }
}

MyTextInput.propTypes= {
    placeholder: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 6
  }
});
