import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setAxiosToken } from '../../inc/ax';
import { isJwtExpired } from '../../inc/jwt';
import { authStorageKey } from '../../inc/storage-keys';
import { AuthState } from '../../types/redux';
import { User, UserRegResponse } from '../../types/user';
import authExtraReducers from './extra';

const emptyState: AuthState = {
  isAuth: false,
  userData: {
    name: '',
    id: '',
    email: '',
    token: '',
    refreshToken: '',
  },
  isLoading: false,
  isLastOperationSuccess: false,
  isLoginRequired: false,
};

const initialState = emptyState;

try {
  const data = localStorage.getItem(authStorageKey);
  if (data) {
    const js = JSON.parse(data) as User;
    initialState.userData.id = js.id ?? '';
    initialState.userData.name = js.name ?? '';
    initialState.userData.email = js.email ?? '';
    initialState.userData.token = js.token ?? '';
    initialState.userData.refreshToken = js.refreshToken ?? '';
    if (initialState.userData.id.length && initialState.userData.token.length) {
      if (!isJwtExpired(initialState.userData.token)) {
        initialState.isAuth = true;
        setAxiosToken(initialState.userData.token);
      }
    }
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
    logout: (state, action: PayloadAction<boolean | undefined>) => {
      state.isAuth = false;
      setAxiosToken(' ');
      localStorage.removeItem(authStorageKey);
      if (action && action.payload) state.isLoginRequired = true;
    },
    setLoginRequired: (state, action: PayloadAction<boolean>) => {
      state.isLoginRequired = action.payload;
    },

  },
  extraReducers: authExtraReducers,
});

export const {
  logout, setAuthLoading, setUserData, resetAuthSuccess, setLoginRequired,
} = authSlice.actions;

export default authSlice.reducer;
