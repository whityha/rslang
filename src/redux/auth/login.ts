import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import ax from '../../inc/ax';
import { UserAuthDTO, UserLoginResponse } from '../../types/user';
import { toastError, toastInfo } from '../toast/slice';

export const loginUser = createAsyncThunk('auth/login', async (authData: UserAuthDTO, api) => {
  try {
    const response: AxiosResponse<UserLoginResponse> = await ax.post('/signin', authData);
    api.dispatch(toastInfo(`Успешный вход! Привет, ${response.data.name}!`));
    const d = response.data;
    return {
      id: d.userId,
      token: d.token,
      name: d.name,
      email: authData.email,
      refreshToken: d.refreshToken,
    };
  } catch (er) {
    api.dispatch(toastError('E-mail или пароль введен не корректно!'));
  }
  return false;
});

export default loginUser;
