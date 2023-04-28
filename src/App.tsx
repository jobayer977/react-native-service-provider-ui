import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import Routes from './routes';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet} from 'react-native';
import {rootReducers} from './redux';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);

  return (
    <Provider store={rootReducers}>
      <Routes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
