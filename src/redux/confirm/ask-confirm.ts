import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, store } from '../store';
import { prepareConfirm } from './slice';

const askConfirm = createAsyncThunk('confirm/show', async (title: string, api) => {
  api.dispatch(prepareConfirm(title));

  return new Promise<boolean>((resolve) => {
    const unsubscribe = store.subscribe(() => {
      const state = api.getState() as RootState;

      if (state.confirm.isConfirmed) {
        unsubscribe();
        resolve(true);
      }
      if (state.confirm.isDeclined) {
        unsubscribe();
        resolve(false);
      }
    });
  });
});

export default askConfirm;
