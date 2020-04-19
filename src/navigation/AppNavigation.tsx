import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';

const AppStack = createStackNavigator();

const AppNavigation = () => (
  <AppStack.Navigator initialRouteName="Home">
    <AppStack.Screen name="Home" component={Home} />
  </AppStack.Navigator>
);

export default AppNavigation;
