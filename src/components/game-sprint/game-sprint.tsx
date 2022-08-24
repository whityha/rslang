import { FC } from 'react';
import { GameProps, GameWordsResult } from '../game-common/types';

const GameSprint: FC<GameProps> = ({ words, onFinish }) => {
  const gameResult: GameWordsResult = { goodWords: [], badWords: [] };

  console.log(gameResult);
  return (
    <div className="game-sprint">
      Игра. Всего слов:
      {' '}
      {words.length}
      <button onClick={() => gameResult.goodWords.push(words[2])}>Good 2</button>
      <button onClick={() => gameResult.goodWords.push(words[1])}>Good 1</button>
      <button onClick={() => gameResult.badWords.push(words[0])}>Bad 0</button>
      <button onClick={() => onFinish(gameResult)}>Конец</button>

    </div>
  );
};

export default GameSprint;
