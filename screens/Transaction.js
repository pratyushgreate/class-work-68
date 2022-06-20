import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
export default class Tracsaction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Tracsaction Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  button: {
    width: 200,
    height: 50,
  },
});
