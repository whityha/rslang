import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import ax from '../../inc/ax';
import { UserAuthDTO, UserRegResponse } from '../../types/user';
import { toastError, toastInfo } from '../toast/slice';
// import { setAuthLoading } from './slice';

type authError = {
  error: {
    errors: Array<{message: string}>;
  }
}

export const regUser = createAsyncThunk('auth/reg', async (authData: UserAuthDTO, api) => {
  try {
    const response: AxiosResponse<UserRegResponse> = await ax.post('/users', authData);
    api.dispatch(toastInfo('Регистрация прошла успешно! Выполните вход в систему'));
    return response.data;
  } catch (er) {
    const e = er as Error | AxiosError | string;
    let mes = 'При авторизации произошла неизвестная ошибка!';
    // Бэк кривой. В некоторых случаех выдает ошибку просто строкой.
    try {
      if (axios.isAxiosError(e)) {
        if (typeof e.response!.data === 'string') mes = e.response!.data; else mes = (e.response!.data as authError).error.errors[0].message;
      }
      api.dispatch(toastError(mes));
    } catch (ec) {
      api.dispatch(toastError(mes));
    }
  }
  return false;
});

export default regUser;
