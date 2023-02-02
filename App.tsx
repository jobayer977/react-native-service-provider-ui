import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);

  return (
    <View>
      <Text>App</Text>
      <Button
        title="Click"
        onPress={() => {
          SplashScreen.show();
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
