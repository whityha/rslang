import { FC, useState } from 'react';
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

  async function levelSelectHandler(level: number) {
    setWords(await getGameWords(level, 0, wordsCount));
  }

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
