import { User } from './user';
import { Words } from './word';

export interface WordsState {
  data: Words;
  isLoading: boolean;
}

export interface AuthState {
  isAuth: boolean;
  userData?: User;
  isLoading: boolean;
}
