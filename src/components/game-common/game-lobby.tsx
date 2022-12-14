import { FC, useEffect, useState } from 'react';
import { Diff } from '../../inc/api';
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

  async function levelSelectHandler(level: number, page: number, prepared: Words = []) {
    setWords(await getGameWords(level, page, wordsCount, prepared));
  }

  useEffect(() => {
    if (reduxWords.gamePrepared) {
      const wrd = reduxWords.data.filter((w) => w.userWord === undefined
      || w.userWord.difficulty === undefined
      || w.userWord.difficulty !== Diff.STUDIED).slice(0, wordsCount);
      if (wrd.length < wordsCount) {
        levelSelectHandler(reduxWords.activeBook, reduxWords.page - 1, wrd);
      } else setWords(wrd);
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
        <LevelSelector onLevelSelect={
          (level) => levelSelectHandler(level, randNumber(0, maxWordsPage))
          }
        />

      </div>
    )
    : <GameController words={words} GameEngine={GameEngine} />;
};

export default GameLobby;
