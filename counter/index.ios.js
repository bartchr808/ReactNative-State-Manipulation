/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class counter extends Component {

  constructor(props) {
    super(props)
    this.state = {number: 0}


  }

  upper() {
    this.setState({number: this.state.number+1})
  }

  lower() {
    this.setState({number: this.state.number-1})
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.upper.bind(this)}><Text>Up</Text></TouchableHighlight>
        <Text style={styles.welcome}>{this.state.number}</Text>
        <TouchableHighlight onPress={this.lower.bind(this)}><Text>Down</Text></TouchableHighlight>
      </View>
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
});

AppRegistry.registerComponent('counter', () => counter);
