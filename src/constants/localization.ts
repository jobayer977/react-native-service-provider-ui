import LocalizedStrings from 'react-native-localization';
let localizedStrings = new LocalizedStrings({
  'en-US': {
    lets: 'Let’s',
    getStart: 'Get Start !',
  },
  bn: {
    lets: 'দেয়',
    getStart: 'শুরু করা !',
  },
});

let currentLocalizationLanguage = localizedStrings.getLanguage();

export {localizedStrings, currentLocalizationLanguage};
