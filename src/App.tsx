import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {getFontFamily} from './constants/font-manager';
import {rootReducers} from './redux';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);

  return (
    <Provider store={rootReducers}>
      <SafeAreaView>
        <Text
          style={{
            fontFamily: getFontFamily('Inter', 'Light'),
          }}>
          App
        </Text>
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
