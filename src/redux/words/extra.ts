import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { WordsState } from '../../types/redux';
import { Words } from '../../types/word';
import getAllWords from './getall';

const wordsExtraReducers = (builder: ActionReducerMapBuilder<WordsState>) => {
  builder.addCase(getAllWords.pending, (state) => {
    state.isLoading = true;
  // eslint-disable-next-line no-sequences
  }),
  builder.addCase(getAllWords.fulfilled, (state, action: PayloadAction<Words>) => {
    state.data = action.payload;
    state.isLoading = false;
  }),
  builder.addCase(getAllWords.rejected, (state) => {
    state.isLoading = false;
  });
};

export default wordsExtraReducers;
