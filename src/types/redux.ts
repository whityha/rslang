import { AlertColor } from '@mui/material';
import { AggWords, UserWord } from '../inc/api';
import { User } from './user';

export interface WordsState {
  data: AggWords;
  userWords: UserWord[];
  userWordsActual: boolean;
  isLoading: boolean;
  gamePrepared: boolean;
}

export interface AuthState {
  isAuth: boolean;
  userData: User;
  isLoading: boolean;
  isLastOperationSuccess: boolean;
  isLoginRequired: boolean;
}

export interface ToastState {
  visible: boolean;
  message: string;
  color: AlertColor;
}
