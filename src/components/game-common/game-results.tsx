import { FC } from 'react';
import { GameWordsResult } from './types';

type Props = {
  result: GameWordsResult
}

const GameResults: FC<Props> = ({ result }) => (
  <div>
    <div>
      Good:
      {result.goodWords.join()}
    </div>
    <div>
      Bad:
      {result.badWords.join()}
    </div>
  </div>
);

export default GameResults;
