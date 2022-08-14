import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { WordsState } from '../../types/redux';
import wordsExtraReducers from './extra';

const initialState: WordsState = {
  data: [],
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
  },
  extraReducers: wordsExtraReducers,
});

// Action creators are generated for each case reducer function
export const { localWordsClear, setWordsLoading } = wordsSlice.actions;

export default wordsSlice.reducer;
