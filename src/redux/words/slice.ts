import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { WordsState } from '../../types/redux';
import wordsExtraReducers from './extra';
import {
  AggWords, Diff, ProgressInfo, UserWord,
} from '../../inc/api';

export const storageKey = 'words';
export const solvedPagesKey = 'words';

type StorageData = {
  page: number,
  activeBook: number,
}

const initialState: WordsState = {
  data: [],
  userWords: [],
  userWordsActual: false,
  isLoading: false,
  gamePrepared: false,
  page: 0,
  activeBook: 0,
  allHard: false,
};

export function savePageBookState(state: WordsState) {
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      page: state.page,
      activeBook: state.activeBook,
    }));
  } catch (e) {
    console.info('Problems with save local storage', e);
  }
}

export function isAllHardState(words: AggWords) {
  const word = words.findIndex((w) => (w.userWord === undefined)
  || (typeof (w.userWord.difficulty) === 'undefined')
  || (w.userWord.difficulty === Diff.UNSET));

  return word < 0;
}

try {
  const data = localStorage.getItem(storageKey);
  if (data) {
    const js = (JSON.parse(data) as StorageData);
    initialState.page = js.page;
    initialState.activeBook = js.activeBook;
  }
} catch (e) {
  console.info('Problems with load local storage', e);
}

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
    setWordPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      savePageBookState(state);
    },
    setWordBook: (state, action: PayloadAction<number>) => {
      state.activeBook = action.payload;
      savePageBookState(state);
    },
    needReloadUserWords: (state) => {
      state.userWordsActual = false;
    },
    setHardState: (state, action: PayloadAction<boolean>) => {
      state.allHard = action.payload;
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
      state.allHard = isAllHardState(state.data);
    },
  },
  extraReducers: wordsExtraReducers,
});

// Action creators are generated for each case reducer function
export const {
  localWordsClear, setWordsLoading, setUserWords, needReloadUserWords,
  setWordExtra, setGamePrepared, setWordPage, setWordBook, setHardState,
} = wordsSlice.actions;

export default wordsSlice.reducer;
