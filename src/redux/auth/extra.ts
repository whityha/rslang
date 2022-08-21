import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { authStorageKey } from '../../inc/storage-keys';
import { AuthState } from '../../types/redux';
import { User, UserRegResponse } from '../../types/user';
import loginUser from './login';
import regUser from './reg';

const authExtraReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  builder.addCase(regUser.pending, (state) => {
    state.isLoading = true;
  // eslint-disable-next-line no-sequences
  }),
  builder.addCase(regUser.fulfilled, (state, action: PayloadAction<UserRegResponse | false>) => {
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
  builder.addCase(loginUser.pending, (state) => {
    state.isLoading = true;
  }),
  builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<User | false>) => {
    if (action.payload !== false) {
      state.userData = action.payload;
      state.isLastOperationSuccess = true;
      state.isAuth = true;
      localStorage.setItem(authStorageKey, JSON.stringify(state.userData));
    }
    state.isLoading = false;
  });
};

export default authExtraReducers;
