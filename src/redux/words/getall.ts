import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import transformData from '../../context/transform-data';
import {
  AggWords, Diff, getHardWords, getUserWords,
} from '../../inc/api';
import ax from '../../inc/ax';
import { isUserAuth } from '../auth/funcs';
import { store } from '../store';
import {
  isAllHardState, setHardState, setUserWords, setWordBook, setWordPage,
} from './slice';

type AllWordsParams = { group?: string | number, page?: string | number, diff?: Diff }

// eslint-disable-next-line default-param-last
export const getAllWords = createAsyncThunk('words/getall', async (params: AllWordsParams = {}, api) => {
  const auth = isUserAuth();

  if (params.diff === undefined) {
    if (params.page !== undefined) api.dispatch(setWordPage(+params.page));
    else params.page = store.getState().words.page.toString();

    if (params.group !== undefined) api.dispatch(setWordBook(+params.group));
    else params.group = store.getState().words.activeBook.toString();
    const response: AxiosResponse<AggWords> = await ax.get(`/words?group=${params.group ?? '0'}&page=${params.page ?? '0'}`);
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
        return w;
      });
    }
    api.dispatch(setHardState(isAllHardState(apiWords)));
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
