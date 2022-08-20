import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/redux';
import { UserRegResponse } from '../../types/user';
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
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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
  testAuth, logout, setAuthLoading, setUserData,
} = authSlice.actions;

export default authSlice.reducer;
