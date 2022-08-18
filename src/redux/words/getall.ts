import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { Words } from '../../types/word';

export const getAllWords = createAsyncThunk('words/getall', async () => {
  const response: AxiosResponse<Words> = await axios.get('https://react-learnwords-example.herokuapp.com/words');
  return response.data;
});

export default getAllWords;
