import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Header } from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('auth-firebase-app', () => App);
