import { FC, useState } from 'react';
import { emptyGameResult, GameProps, GameWordsResult } from '../game-common/types';

const GameSprint: FC<GameProps> = ({ words, onFinish }) => {
  const gameResult: GameWordsResult = emptyGameResult;
  const [currentWord, setCurrentWord] = useState(0);

  function addWord(good: boolean) {
    const target = good ? gameResult.goodWords : gameResult.badWords;
    target.push(words[currentWord]);
    currentWord < words.length - 1 ? setCurrentWord(currentWord + 1) : onFinish(gameResult);
  }

  return (
    <div className="game-sprint">
      <div>
        Всего слов:
        {' '}
        {words.length}
      </div>
      <div>
        {words[currentWord].word}
        <button onClick={() => addWord(true)}>Good</button>
        <button onClick={() => addWord(false)}>Bad</button>
        <button onClick={() => onFinish(gameResult)}>Завершить</button>
      </div>

    </div>
  );
};

export default GameSprint;
