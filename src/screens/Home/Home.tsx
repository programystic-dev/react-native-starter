import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Home: React.FunctionComponent<any> = () => {
  return (
    <View style={styles.container}>
      <Text>React Native Starter</Text>
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

export default Home;
