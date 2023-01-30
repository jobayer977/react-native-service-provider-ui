import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import rootReducer from './redux';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => { };
  }, []);

  return (
    <Provider store={rootReducer}>
      <SafeAreaView>
        <View>
          <Text>Hello</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
