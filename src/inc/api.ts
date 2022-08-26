import { AxiosError, Method } from 'axios';
import { getUID } from '../redux/auth/funcs';
import { logout } from '../redux/auth/slice';
import { store } from '../redux/store';
import { toastError } from '../redux/toast/slice';
import { Word } from '../types/word';
import ax from './ax';

export enum Diff {
  UNSET = 'unset',
  STUDIED = 'studied',
  HARD = 'hard',
}

/*
возле каждого слова, которое использовалось в мини-играх,
на странице учебника указывается прогресс его изучения за весь период:
было ли слово правильно угадано в мини-играх, или пользователь ошибался
*/
export type ProgressInfo = {
  good: number,
  bad: number,
}

export interface WordDTO {
  difficulty?: Diff,
  optional?: ProgressInfo,
}

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

export type AggWord = Word & WordDTO;
export type AggWords = Array<AggWord>;
export type AggTotalCount = Array<number>;
export type AggResponse = {
  paginatedResults: AggWords
  totalCount: AggTotalCount
}

export async function aggApi(filter: string) {
  const id = getUID();
  const f = encodeURI(filter);
  try {
    const resp = await api('get', `/users/${id}/aggregatedWords?filter=${f}`);
    console.log(resp.data[0]);
    return resp.data[0] as AggResponse;
  } catch (e) {
    console.log('Error in aggApi', e);
    throw e;
  }
}

export function getHardWords() {
  return aggApi(`{"$or":[{"userWord.difficulty":"${Diff.HARD}"}]}`);
}

export function getSavedWords() {
  return aggApi(`{"$or":[{"userWord.difficulty":"${Diff.HARD}"},{"userWord":"${Diff.STUDIED}"},{"userWord":"${Diff.UNSET}"}]}`);
}

export function getHardOrStudiedWords() {
  return aggApi(`{"$or":[{"userWord.difficulty":"${Diff.HARD}"},{"userWord":"${Diff.STUDIED}"}]}`);
}

export function getStudiedWords() {
  return aggApi(`{"$or":[{"userWord.difficulty":"${Diff.STUDIED}"}]}`);
}

export function getWordGroup(group: number, page: number = 0) {
  return api('get', `/words/?page=${page}&group=${group}`);
}

export function getUserWords() {
  const id = getUID();
  return api('get', `/users/${id}/words/`);
}

export interface WordBackInfo extends WordDTO {
  id: string
  wordId: string,
}

export async function setUserWord(
  wordId: string,
  difficulty: Diff,
  progress?: ProgressInfo,
) {
  const id = getUID();
  let method: Method = 'post';
  const url = `/users/${id}/words/${wordId}`;
  try {
    const resp = await api('get', url);
    // Если был прогресс и не завдавил аргументом, то сохраняем его из предыдущего состояния
    if (progress === undefined && resp.data.optional) progress = resp.data.optional;
    method = 'put';
    // console.log('Слово есть в базе, делаем PUT', resp.data);
  } catch (e) {
    // console.log('Делаем POST, так как слова нет в базе, либо ошибка при получении', e);
    method = 'post';
  }

  const dto: WordDTO = {
    difficulty,
  };

  if (progress !== undefined) dto.optional = progress;
  return api(method, url, dto);
}
