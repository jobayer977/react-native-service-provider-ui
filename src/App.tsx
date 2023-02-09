import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {rootReducers} from './redux';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);

  return (
    <Provider store={rootReducers}>
      <SafeAreaView>
        <Text>App</Text>
        <Button
          title="Click"
          onPress={() => {
            SplashScreen.show();
          }}
        />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
