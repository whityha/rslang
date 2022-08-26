import { Diff, setUserWord } from '../../inc/api';
import { isUserAuth } from '../../redux/auth/funcs';
import { GameWordsResult } from './types';

function saveDiff(gameResult: GameWordsResult) {
  gameResult.goodWords.forEach((word) => {
    setUserWord(word.id, Diff.STUDIED, { good: 1, bad: 0 }, true);
  });

  gameResult.badWords.forEach((word) => {
    const newHard = Diff.HARD;
    /* TODO:
        Правильно - это получить с сервера и узнать было ли оно сложным. Если не было, то надо unset
        newHard === Diff.HARD ? Diff.HARD : Diff.UNSET;
        Пока просто делаем сложным, если ошиблись.
      */
    setUserWord(word.id, newHard, { good: 0, bad: 1 }, true);
  });
}

function saveStat(gameResult: GameWordsResult) {
  // TODO: Сохранять статистику в базу данных GET /users/{id}/statistics
  /*
  1. Получить запись, еси ее нет, пустой объект:
  {
  "learnedWords": 0,
  "optional": {}
  }

  2. Добавить новый день с результатами, или если день есть, то добавить к существующим полям

  3. Записать обратно в базу PUT /users/{id}/statistics

  Пример:

  {
  "learnedWords": 0,
  "optional": {
    "312312": {
      "new": 20,
      "good": 5,
      "bad": 3
    },
    "312313": {
      "new": 20,
      "good": 12,
      "bad": 11
    }
  }
}
Каждый обьект в optional  - эт один длень. Ключ это номер дня.
  */
  console.info(gameResult);
}

export default function saveGameStat(gameResult: GameWordsResult) {
  if (isUserAuth()) {
    saveDiff(gameResult);
    saveStat(gameResult);
  }
}
