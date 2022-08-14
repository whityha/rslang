import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { WordsState } from '../../types/redux';
import { Words } from '../../types/word';
import getAllWords from './getall';

const wordsExtraReducers = (builder: ActionReducerMapBuilder<WordsState>) => {
  builder.addCase(getAllWords.pending, (state) => {
    console.info('pending');
    state.isLoading = true;
  // eslint-disable-next-line no-sequences
  }),
  builder.addCase(getAllWords.fulfilled, (state, action: PayloadAction<Words>) => {
    console.info('fullfield');
    state.data = action.payload;
    state.isLoading = false;
  }),
  builder.addCase(getAllWords.rejected, (state) => {
    console.info('rejected');
    state.isLoading = false;
  });
};

export default wordsExtraReducers;
