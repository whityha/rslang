import api, {
  Diff, getStat, getUserWords, ProgressInfo, setUserWord, UserWord,
} from '../../inc/api';
import { getUID, isUserAuth } from '../../redux/auth/funcs';
import { store } from '../../redux/store';
import { needReloadUserWords } from '../../redux/words/slice';
import { GameWordsResult } from './types';

export type GameStatData = {
  new: number,
  bad: number,
  good: number,
  serie: number,
}

export type StatItem = { // ключ - дата в формате YYYY-MM-DD
  new: number,
  good: number,
  bad: number,
  games: {
    [key: string]: GameStatData // ключ -  GameName, ts не дает типизировать
  }
}

export type StatOptional = {
  [key: string]: StatItem
}

export type StatData = {
  learnedWords: number,
  optional: StatOptional
}

export function getStatDate(date?: string | number | Date) {
  const d = date ? new Date(date) : new Date();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) { month = `0${month}`; }
  if (day.length < 2) { day = `0${day}`; }

  return [year, month, day].join('-');
}

function suw(id: string, diff: Diff, optional: ProgressInfo, addToProgress: true) {
  // const word = store.getState().words.data.find((w) => w.id === id);
  setUserWord(id, diff, optional, addToProgress);
  store.dispatch(needReloadUserWords());
  /*
  if (word) {
    console.log('UPD', word);
    word.userWord = {
      difficulty: diff,
      optional,
    };
  } */
}

export default async function saveGameStat(gameResult: GameWordsResult) {
  if (isUserAuth()) {
    let newWords = 0;

    const findWord = (words: UserWord[], wordId: string) => {
      const uWord = words.find((w) => w.wordId === wordId);
      if (uWord === undefined) newWords += 1;
      return uWord;
    };

    const userWords = await getUserWords();
    gameResult.goodWords.forEach((word) => {
      findWord(userWords.data as UserWord[], word.id);
      suw(word.id, Diff.STUDIED, { good: 1, bad: 0 }, true);
    });

    gameResult.badWords.forEach((word) => {
      const uWord = findWord(userWords.data as UserWord[], word.id);
      const newHard = uWord && (uWord.difficulty === Diff.HARD) ? Diff.HARD : Diff.UNSET;
      suw(word.id, newHard, { good: 0, bad: 1 }, true);
    });

    gameResult.unusedWords?.forEach((word) => {
      const uWord = findWord(userWords.data as UserWord[], word.id);
      const newHard = uWord ? uWord.difficulty : Diff.UNSET;
      suw(word.id, newHard, { good: 0, bad: 0 }, true);
    });

    const uid = getUID();
    const statData = await getStat();

    const date = getStatDate();
    if (statData.optional[date]) {
      statData.optional[date].new += newWords;
      statData.optional[date].good += gameResult.goodWords.length;
      statData.optional[date].bad += gameResult.badWords.length;
      if (statData.optional[date].games[gameResult.gameName]) {
        statData.optional[date].games[gameResult.gameName].new += newWords;
        statData.optional[date].games[gameResult.gameName].good += gameResult.goodWords.length;
        statData.optional[date].games[gameResult.gameName].bad += gameResult.badWords.length;
        // eslint-disable-next-line max-len
        statData.optional[date].games[gameResult.gameName].serie = Math.max(gameResult.serie, statData.optional[date].games[gameResult.gameName].serie);
      } else {
        statData.optional[date].games[gameResult.gameName] = {
          new: newWords,
          good: gameResult.goodWords.length,
          bad: gameResult.badWords.length,
          serie: gameResult.serie,
        };
      }
    } else {
      statData.optional[date] = {
        new: newWords,
        good: gameResult.goodWords.length,
        bad: gameResult.badWords.length,
        games: {
          [gameResult.gameName]: {
            new: newWords,
            good: gameResult.goodWords.length,
            bad: gameResult.badWords.length,
            serie: gameResult.serie,
          },
        },
      };
    }

    api('put', `/users/${uid}/statistics`, statData);
  }
}
