import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { WordsState } from '../../types/redux';
import wordsExtraReducers from './extra';
import { Diff, ProgressInfo, UserWord } from '../../inc/api';

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
    setWordExtra:
    (state, action: PayloadAction<{id: string, diff?: Diff, optional?: ProgressInfo}>) => {
      const wordIndex = state.data.findIndex((w) => w.id === action.payload.id);
      if (wordIndex >= 0) {
        if (action.payload.diff) {
          state.userWords[wordIndex].difficult = action.payload.diff;
          if (state.data[wordIndex].userWord) {
            state.data[wordIndex].userWord!.difficulty = action.payload.diff;
          }
        }
        if (action.payload.optional) {
          state.userWords[wordIndex].optional = action.payload.optional;
          if (state.data[wordIndex].userWord) {
            state.data[wordIndex].userWord!.optional = action.payload.optional;
          }
        }
      }
    },
  },
  extraReducers: wordsExtraReducers,
});

// Action creators are generated for each case reducer function
export const {
  localWordsClear, setWordsLoading, setUserWords, needReloadUserWords, setWordExtra,
} = wordsSlice.actions;

export default wordsSlice.reducer;
