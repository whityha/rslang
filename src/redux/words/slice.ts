import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { WordsState } from '../../types/redux';
import wordsExtraReducers from './extra';
import { UserWord } from '../../inc/api';

const initialState: WordsState = {
  data: [],
  userWords: [],
  userWordsActual: false,
  isLoading: false,
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    localWordsClear: (state) => {
      state.data = [];
    },
    setWordsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUserWords: (state, action: PayloadAction<UserWord[]>) => {
      state.userWords = action.payload;
      state.userWordsActual = true;
      console.log('uWords', state.userWords);
    },
    needReloadUserWords: (state) => {
      state.userWordsActual = false;
    },
  },
  extraReducers: wordsExtraReducers,
});

// Action creators are generated for each case reducer function
export const {
  localWordsClear, setWordsLoading, setUserWords, needReloadUserWords,
} = wordsSlice.actions;

export default wordsSlice.reducer;
