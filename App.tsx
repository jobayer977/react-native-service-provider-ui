import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);

  return (
    <SafeAreaView>
      <Text>App</Text>
      <Button
        title="Click"
        onPress={() => {
          SplashScreen.show();
        }}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
