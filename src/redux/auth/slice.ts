import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../types/redux';

const initialState: AuthState = {
  isAuth: false,
  userData: {
    name: '',
    id: '',
  },
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
});

export const { testAuth, logout } = authSlice.actions;

export default authSlice.reducer;
