import { FC } from 'react';
import { Word } from '../../types/word';
import GameResultsItem from './game-results-item';
import { GameWordsResult } from './types';
import './style.scss';

type Props = {
  result: GameWordsResult
}

const GameResults: FC<Props> = ({ result }) => (
  <div className="res-window">
    <div>
      <div className="res-window__title darkred">
        Ошибок —
        {' '}
        <strong>{result.badWords.length}</strong>
      </div>
      {
        result.badWords.map((word: Word) => <GameResultsItem key={word.id} word={word} />)
      }

    </div>
    <div className="res-window__title darkgreen">
      Знаю —
      {' '}
      <strong>{result.goodWords.length}</strong>
    </div>
    <div>
      {
        result.goodWords.map((word: Word) => <GameResultsItem key={word.id} word={word} />)
      }
    </div>

    <div className="res-window__info">
      Максимально правильных ответов подряд:
      {' '}
      {result.serie}
      {' '}
    </div>

  </div>
);

export default GameResults;
