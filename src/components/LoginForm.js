import React from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardItem, Button, Input, Spinner } from './common';

class LoginForm extends React.Component {

  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoadingSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoadingSuccess)
          .catch(this.onLoadingFail);
      });
  }

  onLoadingSuccess = () => {
    this.setState = ({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  onLoadingFail = () => {
    this.setState({ error: 'Authentication failed. ', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />;
    }
    return (
      <Button onPress={this.onButtonPress}> Log in </Button>
    );
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
          {this.renderButton()}
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
