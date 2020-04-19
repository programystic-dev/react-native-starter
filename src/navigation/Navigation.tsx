import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from '../screens';
import AppNavigation from './AppNavigation';

enableScreens();

const MainStack = createStackNavigator();

const Navigation = () => {
  const [isLoading] = React.useState(
    false,
  ); /* TODO This should be replaced by app state */

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="AppLoading" headerMode="none">
        {/* TODO - Here should conditionally switch between Auth screens and App screens based on user data from store */}
        <MainStack.Screen name="App" component={AppNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
