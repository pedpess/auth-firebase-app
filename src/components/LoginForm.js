import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardItem, Button, Input } from './common';

class LoginForm extends React.Component {

  state = {
    email: '',
    password: '',
    error: '',
  };

  onButtonPress= () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication failed.' });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            autoCorrect={false}
            placeholder="user@email.com"
            label="Email"
            value={this.state.emailText}
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Input
            secureTextEntry
            autoCorrect={false}
            placeholder="password"
            label="Password"
            value={this.state.passwordText}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardItem>
          <Button onPress={this.onButtonPress}> Log in </Button>
        </CardItem>
      </Card>
    );
  }


}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    alignSelf: 'center',
    color: 'red',
  }
};

export default LoginForm;
