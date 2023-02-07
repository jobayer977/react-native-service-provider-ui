import {createSlice} from '@reduxjs/toolkit';
export interface IAppReducer {
  appFontFamily: string;
  appLanguage: string;
}

const slice = createSlice({
  name: 'AppReducer',
  initialState: {
    appFontFamily: '',
    appLanguage: '',
  } as IAppReducer,
  reducers: {
    setFontFamily(state, action) {
      state.appFontFamily = action.payload;
    },
    setAppLanguage(state, action) {
      state.appLanguage = action.payload;
    },
  },
});

export const {setAppLanguage, setFontFamily} = slice.actions;
export default slice.reducer;
