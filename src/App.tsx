import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { getFontFamily } from './constants/font-manager';
import { rootReducers } from './redux';
import { localizedStrings } from './constants/localization';
import Routes from './routes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => { };
  }, []);

  return (
    <Provider store={rootReducers}>
      <Routes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
