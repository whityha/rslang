import { configureStore } from '@reduxjs/toolkit';
import sliceWords from './words/slice';

export const store = configureStore({
  reducer: {
    words: sliceWords,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
