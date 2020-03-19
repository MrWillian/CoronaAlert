import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

export default createAppContainer(
  createStackNavigator({
    Login, Main, Register
  }, {
    initialRouteName: 'Register',
    defaultNavigationOptions: {
      headerShown: false
    }
  })
);
