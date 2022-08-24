import { FC } from 'react';
import { Word, Words } from '../../types/word';
import { GameWordsResult } from './types';

type Props = {
  result: GameWordsResult
}

const glue = (words: Words) => words.reduce((acc: string, curr: Word) => acc + curr.word, '');

const GameResults: FC<Props> = ({ result }) => (
  <div>
    <h2>Результаты</h2>
    <div>
      Good:
      {glue(result.goodWords)}
    </div>
    <div>
      Bad:
      {glue(result.badWords)}
    </div>
  </div>
);

export default GameResults;
