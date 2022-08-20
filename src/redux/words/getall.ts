import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import ax from '../../inc/ax';
import { Words } from '../../types/word';

export const getAllWords = createAsyncThunk('words/getall', async () => {
  const response: AxiosResponse<Words> = await ax.get('/words');
  return response.data;
});

export default getAllWords;
