import { FC, useEffect, useState } from 'react';
import { maxWordsPage } from '../../inc/conf';
import randNumber from '../../inc/rand-number';
import { useAppDispatch, useWords } from '../../redux/hooks';
import { setGamePrepared } from '../../redux/words/slice';
import { Words } from '../../types/word';
import GameController from './game-controller';
import getGameWords from './get-game-words';
import LevelSelector from './level-selector';
import { PossibleGames } from './types';

type Props = {
  title: string;
  description: string;
  GameEngine: PossibleGames
  wordsCount: number
}

const GameLobby: FC<Props> = ({
  title, description, GameEngine, wordsCount,
}) => {
  const [words, setWords] = useState<Words>([]);
  const reduxWords = useWords();
  const dispatch = useAppDispatch();

  async function levelSelectHandler(level: number) {
    setWords(await getGameWords(level, randNumber(0, maxWordsPage), wordsCount));
  }

  useEffect(() => {
    if (reduxWords.gamePrepared) {
      setWords(reduxWords.data.slice(0, wordsCount));
      dispatch(setGamePrepared(false));
    }
  }, []);

  const isPlay = () => words.length > 0;

  return !isPlay()
    ? (
      <div className="game-info">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <LevelSelector onLevelSelect={(level) => levelSelectHandler(level)} />

      </div>
    )
    : <GameController words={words} GameEngine={GameEngine} />;
};

export default GameLobby;
