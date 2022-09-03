import { AxiosError, Method } from 'axios';
import { StatData } from '../components/game-common/save-game-stat';
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

export type UserWord = {
  id: string;
  wordId: string;
  difficulty: Diff;
  optional?: ProgressInfo,
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
          if (code !== 404) {
            store.dispatch(toastError('Неизвестная ошибка!'));
          }
      }
    }
    throw e;
  }
}

export interface AggWord extends Word {
  _id?: string;
  userWord?: WordDTO;
}
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
    const resp = await api('get', `/users/${id}/aggregatedWords?wordsPerPage=10000&filter=${f}`);
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

export function getUserWord(wordId: string) {
  const id = getUID();
  return api('get', `/users/${id}/words/${wordId}`);
}

export interface WordBackInfo extends WordDTO {
  id: string
  wordId: string,
}

export async function setUserWord(
  wordId: string,
  difficulty?: Diff,
  progress?: ProgressInfo,
  addToProgress? : boolean, // При записи результатов игры добавляем в прогресс А НЕ ЗАТИРАЕМ ЕГО
) {
  const id = getUID();
  let method: Method = 'post';
  const url = `/users/${id}/words/${wordId}`;
  try {
    const resp = await api('get', url);
    // Если был прогресс и не завдавил аргументом, то сохраняем его из предыдущего состояния
    if (resp.data.optional) {
      if (progress === undefined) progress = resp.data.optional; else if (addToProgress) {
        progress.good += resp.data.optional.good;
        progress.bad += resp.data.optional.bad;
      }
    }

    // Не перезатираем старый уровень, если не задан
    if (resp.data.difficulty && difficulty === undefined) difficulty = resp.data.difficulty;

    method = 'put';
    // console.log('Слово есть в базе, делаем PUT', resp.data);
  } catch (e) {
    // console.log('Делаем POST, так как слова нет в базе, либо ошибка при получении', e);
    method = 'post';
  }

  const dto: WordDTO = {};
  if (difficulty) dto.difficulty = difficulty;

  if (progress !== undefined) dto.optional = progress;

  return api(method, url, dto);
}

export async function getStat() {
  let statData: StatData;
  try {
    const uid = getUID();
    const statRawData = await api('get', `/users/${uid}/statistics`);
    const statSeverData = statRawData.data as StatData;
    statData = {
      learnedWords: statSeverData.learnedWords,
      optional: statSeverData.optional,
    };

    statRawData.data as StatData;
  } catch (reason) {
    statData = {
      learnedWords: 0,
      optional: {},
    };
  }
  return statData;
}
