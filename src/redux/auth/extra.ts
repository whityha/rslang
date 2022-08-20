import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { authStorageKey } from '../../inc/storage-keys';
import { AuthState } from '../../types/redux';
import { UserRegResponse } from '../../types/user';
import regUser from './reg';

const authExtraReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(regUser.pending, (state) => {
    console.info('pending');
    state.isLoading = true;
  // eslint-disable-next-line no-sequences
  }),
  builder.addCase(regUser.fulfilled, (state, action: PayloadAction<UserRegResponse | false>) => {
    console.info('fullfield', action.payload);
    if (action.payload !== false) {
      state.userData = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.isLastOperationSuccess = true;
      localStorage.setItem(authStorageKey, JSON.stringify(state.userData));
    }
    state.isLoading = false;
  }),
  builder.addCase(regUser.rejected, (state, action) => {
    console.info('rejected', action);
    state.isLoading = false;
  });
};

export default authExtraReducers;
