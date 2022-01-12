/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * Practical - Basic Tab Navigation
 * 
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component {
    state = {
        selectedTab: "globe"
    }

    render() {
        return (

            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'globe'}
                    title="Globe"
                    renderIcon={() => <Image source={require('./images/globe.png')} />}
                    renderSelectedIcon={() => <Image source={require('./images/globe.png')} />}
                    badgeText="4"
                    onPress={() => this.setState({ selectedTab: 'globe' })}>
                    <View style={styles.container}>
                        <Text>Globe</Text>


                        <Image
                            source={require('./images/globe_big.png')}
                            style={styles.image} />
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'map'}
                    title="Map"
                    renderIcon={() => <Image source={require('./images/map.png')} />}
                    renderSelectedIcon={() => <Image source={require('./images/map.png')} />}
                    onPress={() => this.setState({ selectedTab: 'map' })}>
                    <View style={styles.container}>
                        <Text>Map</Text>
                        <Image
                            source={require('./images/map_big.png')}
                            style={styles.image} />
                    </View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image: {
        width: 250,
        height: 250
    }
});
