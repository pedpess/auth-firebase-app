import React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Button } from './common';

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardItem />
        <CardItem />

        <CardItem>
          <Button>
            Log in
            </Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
