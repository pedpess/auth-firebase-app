import React from 'react';
import { } from 'react-native';
import { Card, CardItem, Button, Input } from './common';

class LoginForm extends React.Component {

  state = {
    emailText: '',
    passwordText: '',
  };

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            autoCorrect={false}
            placeholder="user@email.com"
            label="Email"
            value={this.state.emailText}
            onChangeText={emailText => this.setState({ emailText })}
          />
        </CardItem>
        <CardItem>
          <Input
            secureTextEntry
            autoCorrect={false}
            placeholder="password"
            label="Password"
            value={this.state.passwordText}
            onChangeText={passwordText => this.setState({ passwordText })}
          />
        </CardItem>
        <CardItem>
          <Button> Log in </Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
