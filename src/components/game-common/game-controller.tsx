import { FC, useState } from 'react';
import { Words } from '../../types/word';
import GameResults from './game-results';
import saveGameStat from './save-game-stat';
import { GameWordsResult, PossibleGames } from './types';

type Props = {
  GameEngine: PossibleGames,
  words: Words
}

const GameController:FC<Props> = ({ GameEngine, words }) => {
  const [result, setResult] = useState<GameWordsResult | false>(false);

  const onFinish = (gameResult: GameWordsResult) => {
    setResult(gameResult);
    saveGameStat(gameResult);
  };

  return result !== false
    ? <GameResults result={result} />
    : <GameEngine words={words} onFinish={(res) => onFinish(res)} />;
};

export default GameController;
