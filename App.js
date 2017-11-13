import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardItem } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  state = {
    loggedIn: null,
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCmY_QynxPnr8kY0mPY4im8CnqKwej6ES0',
      authDomain: 'auth-firebase-app-8b7c5.firebaseapp.com',
      databaseURL: 'https://auth-firebase-app-8b7c5.firebaseio.com',
      projectId: 'auth-firebase-app-8b7c5',
      storageBucket: 'auth-firebase-app-8b7c5.appspot.com',
      messagingSenderId: '888433026715'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardItem>
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </CardItem>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size={'large'} />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
