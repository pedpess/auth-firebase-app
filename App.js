import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCmY_QynxPnr8kY0mPY4im8CnqKwej6ES0',
      authDomain: 'auth-firebase-app-8b7c5.firebaseapp.com',
      databaseURL: 'https://auth-firebase-app-8b7c5.firebaseio.com',
      projectId: 'auth-firebase-app-8b7c5',
      storageBucket: 'auth-firebase-app-8b7c5.appspot.com',
      messagingSenderId: '888433026715'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}
