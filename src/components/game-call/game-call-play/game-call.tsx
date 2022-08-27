import { FC } from 'react';
import { createRandomNumberArray, TRANSLATE_VARIANTS } from '../constants.tsx/constants';
import { GameProps, GameWordsResult } from '../../game-common/types';
import CallPlayWords from './game-call-play';

const GameCall: FC<GameProps> = ({ words, onFinish }) => {
  const GAME_ARRAY = createRandomNumberArray(10, [0, words.length - 1])
    .map((wordIndex) => {
      const createRusArray = (idx: number): Array<string> => {
        const TRANSLATE_NUMBERS_ARRAY = createRandomNumberArray(
          TRANSLATE_VARIANTS,
          [0, words.length - 1],
        );
        if (!TRANSLATE_NUMBERS_ARRAY.includes(idx)) {
          return TRANSLATE_NUMBERS_ARRAY.map((item: number) => words[item].wordTranslate);
        }
        return createRusArray(idx);
      };

      const translateWords = createRusArray(wordIndex);
      const translates = [words[wordIndex].wordTranslate, ...translateWords].sort();
      return {
        word: words[wordIndex],
        translates,
      };
    });

  return (
    <CallPlayWords
      gameWords={GAME_ARRAY}
      finish={(result: GameWordsResult) => onFinish(result)}
    />
  );
};

export default GameCall;
