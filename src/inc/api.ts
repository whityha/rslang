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
        case 403:
          store.dispatch(toastError('Недостаточно прав для выполнения данной операции!'));
          break;
        case 404:
          store.dispatch(toastError('Страница не найдена!'));
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

export function getUID() {
  return store.getState().auth.userData.id;
}

export function getUserWords() {
  const id = getUID();
  return api('get', `/users/${id}/words/`);
}

// TODO: difficulty: string заменить на тип с ограниченным количеством значений
export function addUserWord(wordId: string, difficulty: string, optional: Object = {}) {
  const id = getUID();
  return api('post', `/users/${id}/words/${wordId}`, {
    difficulty,
    optional,
  });
}
