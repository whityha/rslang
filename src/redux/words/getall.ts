import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import ax from '../../inc/ax';
import { Words } from '../../types/word';

type AllWordsParams = { group?: string | number, page?: string | number }

export const getAllWords = createAsyncThunk('words/getall', async (params: AllWordsParams = {}) => {
  const response: AxiosResponse<Words> = await ax.get(`/words?group=${params.group ?? ''}&page=${params.page ?? ''}`);
  return response.data;
});

export default getAllWords;
