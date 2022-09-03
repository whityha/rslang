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
  gamePrepared: false,
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
    },
    setGamePrepared: (state, action: PayloadAction<boolean>) => {
      state.gamePrepared = action.payload;
    },
    needReloadUserWords: (state) => {
      state.userWordsActual = false;
      console.log('needReloadUserWords');
    },
    setWordExtra:
    (state, action: PayloadAction<{id: string, diff?: Diff, optional?: ProgressInfo}>) => {
      const wordIndex = state.data.findIndex((w) => w.id === action.payload.id);
      if (wordIndex >= 0) {
        const userWordIndex = state.userWords.findIndex((w) => w.wordId === action.payload.id);
        if (userWordIndex < 0) {
          state.userWords = [...state.userWords, {
            id: '',
            wordId: action.payload.id,
            difficulty: action.payload.diff || Diff.UNSET,
            optional: action.payload.optional,
          }];
        }
        if (action.payload.diff) {
          if (userWordIndex >= 0) state.userWords[userWordIndex].difficulty = action.payload.diff;
          if (state.data[wordIndex].userWord) {
            state.data[wordIndex].userWord!.difficulty = action.payload.diff;
          }
        }
        if (action.payload.optional) {
          if (userWordIndex >= 0) state.userWords[userWordIndex].optional = action.payload.optional;
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
  localWordsClear, setWordsLoading, setUserWords, needReloadUserWords,
  setWordExtra, setGamePrepared,
} = wordsSlice.actions;

export default wordsSlice.reducer;
