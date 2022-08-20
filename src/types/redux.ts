import { AlertColor } from '@mui/material';
import { User } from './user';
import { Words } from './word';

export interface WordsState {
  data: Words;
  isLoading: boolean;
}

export interface AuthState {
  isAuth: boolean;
  userData: User;
  isLoading: boolean;
  isLastOperationSuccess: boolean;
}

export interface ToastState {
  visible: boolean;
  message: string;
  color: AlertColor;
}
