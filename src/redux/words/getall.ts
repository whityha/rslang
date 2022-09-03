import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import transformData from '../../context/transform-data';
import {
  AggWords, Diff, getHardWords, getUserWords,
} from '../../inc/api';
import ax from '../../inc/ax';
import { isUserAuth } from '../auth/funcs';
import { store } from '../store';
import { setUserWords } from './slice';

type AllWordsParams = { group?: string | number, page?: string | number, diff?: Diff }

// eslint-disable-next-line default-param-last
export const getAllWords = createAsyncThunk('words/getall', async (params: AllWordsParams = {}, api) => {
  const auth = isUserAuth();
  console.log('getall', store.getState().words.userWordsActual);

  if (params.diff === undefined) {
    const response: AxiosResponse<AggWords> = await ax.get(`/words?group=${params.group ?? ''}&page=${params.page ?? ''}`);
    let apiWords = response.data as AggWords;

    if (auth) {
      let words = store.getState().words.userWords;
      if (!store.getState().words.userWordsActual) {
        const uw = await getUserWords();
        api.dispatch(setUserWords(uw.data));
        words = uw.data;
      }
      apiWords = response.data.map((w) => {
        const word = words.find((x) => x.wordId === w.id);
        w.userWord = word || {};
        if (w.word === 'alcohol') console.log(w, word);
        return w;
      });
    }
    return apiWords;
  }
  if (auth && params.diff) {
    const response = await getHardWords();
    const data = response.paginatedResults.map((item) => transformData(item));
    return data;
  }
  return [];
});

export default getAllWords;
