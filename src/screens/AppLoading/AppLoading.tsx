/**
 * Loader is displayed while app is loading, state is rehydrated.
 * TODO Loads all required assets.
 * TODO Handle Splash screen.
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AppLoading: React.FunctionComponent<any> = () => {
  /* TODO Add logic for handling state here and switch routes */

  return (
    <View style={styles.container}>
      <Text>App Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AppLoading;
