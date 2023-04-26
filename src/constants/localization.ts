import LocalizedStrings from 'react-native-localization';
let localizedStrings = new LocalizedStrings({
    "en-US":{
      how:"How do you want your egg today?",
      boiledEgg:"Boiled egg",
      softBoiledEgg:"Soft-boiled egg",
      choice:"How to choose the egg"
    },
    en:{
      how:"How do you want your egg today?",
      boiledEgg:"Boiled egg",
      softBoiledEgg:"Soft-boiled egg",
      choice:"How to choose the egg"
    },
    it: {
      how:"Come vuoi il tuo uovo oggi?",
      boiledEgg:"Uovo sodo",
      softBoiledEgg:"Uovo alla coque",
      choice:"Come scegliere l'uovo"
    }
});

let currentLocalizationLanguage = localizedStrings.getLanguage()

export {
    localizedStrings,
    currentLocalizationLanguage
}