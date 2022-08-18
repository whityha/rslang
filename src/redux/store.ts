import { configureStore } from '@reduxjs/toolkit';
import sliceWords from './words/slice';
import sliceAuth from './auth/slice';
import sliceToast from './toast/slice';
import confirmSlice from './confirm/slice';

export const store = configureStore({
  reducer: {
    words: sliceWords,
    auth: sliceAuth,
    toast: sliceToast,
    confirm: confirmSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
