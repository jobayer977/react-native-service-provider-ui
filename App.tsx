import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      // SplashScreen?.hide();
    }, 1500);
  }, []);
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
