import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authStorageKey } from '../../inc/storage-keys';
import { AuthState } from '../../types/redux';
import { User, UserRegResponse } from '../../types/user';
import authExtraReducers from './extra';

const initialState: AuthState = {
  isAuth: false,
  userData: {
    name: '',
    id: '',
    email: '',
    token: '',
  },
  isLoading: false,
  isLastOperationSuccess: false,
};

try {
  const data = localStorage.getItem(authStorageKey);
  if (data) {
    const js = JSON.parse(data) as User;
    initialState.userData.id = js.id ?? '';
    initialState.userData.name = js.name ?? '';
    initialState.userData.email = js.email ?? '';
    initialState.userData.token = js.token ?? '';
  }
} catch (e) {
  // Ничего не делаем. Нет доступа к localStorage.
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetAuthSuccess: (state) => {
      state.isLastOperationSuccess = false;
    },
    setUserData: (state, action: PayloadAction<UserRegResponse>) => {
      state.userData = { ...action.payload, token: '' };
    },
    testAuth: (state) => {
      state.userData = {
        id: 'hsjhsfdgasd',
        name: 'Test',
      };
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },

  },
  extraReducers: authExtraReducers,
});

export const {
  testAuth, logout, setAuthLoading, setUserData, resetAuthSuccess,
} = authSlice.actions;

export default authSlice.reducer;
