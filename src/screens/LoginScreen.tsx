import {Div, Image} from 'react-native-magnus';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {GRAY_BLACK} from '../constants/color-manager';
import {IMAGE_ASSETS} from '../constants/assest-manager';
import {Input} from '@ui-kitten/components';
import React from 'react';
import {createStructuredSelector} from 'reselect';
import {getFontFamily} from '../constants/font-manager';
import {localizedStrings} from '../constants/localization';
import {selectAppFontFamily} from '../redux/app.reducer';
import {useSelector} from 'react-redux';

const LoginScreen = () => {
  const {appFontFamily} = useSelector(
    createStructuredSelector({
      appFontFamily: selectAppFontFamily,
    }),
  );
  const [value, setValue] = React.useState('');
  console.log({appFontFamily});
  return (
    <SafeAreaView>
      <Div px={20}>
        <Image
          mt={68}
          mb={32}
          source={IMAGE_ASSETS.logo}
          w={88}
          h={39}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.title,
            {
              fontFamily: getFontFamily(appFontFamily, 'Bold'),
            },
          ]}>
          {localizedStrings.lets}
        </Text>
        <Text
          style={[
            styles.title,
            {
              fontFamily: getFontFamily(appFontFamily, 'Bold'),
            },
          ]}>
          {localizedStrings.getStart}
        </Text>
      </Div>
      <Div px={20} pt={53}>
        <Input
          size="large"
          placeholder="Email"
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
        />
      </Div>
    </SafeAreaView>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  title: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 32,
    color: GRAY_BLACK,
  },
});
