import { AxiosError, Method } from 'axios';
import { getUID } from '../redux/auth/funcs';
import { logout } from '../redux/auth/slice';
import { store } from '../redux/store';
import { toastError } from '../redux/toast/slice';
import ax from './ax';

export default async function api(method: Method, url: string, data?: Object) {
  try {
    const resp = await ax.request({
      method,
      url,
      data,
    });
    return resp;
  } catch (reason) {
    const e = reason as AxiosError;
    const code = e.response?.status ?? 0;
    if (code) {
      switch (code) {
        case 401:
          store.dispatch(toastError('Необходимо авторизоваться'));
          store.dispatch(logout(true));
          break;
        case 500:
          store.dispatch(toastError('Внутренняя ошибка сервера!'));
          break;
        default:
          store.dispatch(toastError('Неизвестная ошибка!'));
      }
    }
    throw e;
  }
}

export function getWordGroup(group: number, page: number = 0) {
  return api('get', `/words/?page=${page}&group=${group}`);
}

export function getUserWords() {
  const id = getUID();
  return api('get', `/users/${id}/words/`);
}

export enum Diff {
  UNSET = 'unset',
  STUDIED = 'studied',
  HARD = 'hard',
}

export interface WordDTO {
  difficulty?: Diff,
}

export interface WordBackInfo extends WordDTO {
  id: string
  wordId: string,
}

export async function setUserWord(
  wordId: string,
  difficulty: Diff,
) {
  const id = getUID();
  let method: Method = 'post';
  const url = `/users/${id}/words/${wordId}`;
  try {
    const resp = await api('get', url);
    method = 'put';
    console.log('Слово есть в базе, делаем PUT', resp.data);
  } catch (e) {
    console.log('Делаем POST, так как слова нет в базе, либо ошибка при получении', e);
    method = 'post';
  }
  return api(method, url, {
    difficulty,
  });
}
