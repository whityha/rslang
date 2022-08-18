import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, store } from '../store';
import { prepareConfirm } from './slice';

const onConfirm = createAsyncThunk('confirm/show', async (title: string, api) => {
  api.dispatch(prepareConfirm(title));
  console.log('On Confirm', title);

  return new Promise<boolean>((resolve) => {
    const unsubscribe = store.subscribe(() => {
      const state = api.getState() as RootState;

      console.log('change', state.confirm);

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

export default onConfirm;
