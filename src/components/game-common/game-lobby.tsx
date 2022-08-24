import { FC, useState } from 'react';
import { Words } from '../../types/word';
import GameController from './game-controller';
import LevelSelector from './level-selector';
import { PossibleGames } from './types';

type Props = {
  title: string;
  description: string;
  GameEngine: PossibleGames
}

const GameLobby: FC<Props> = ({ title, description, GameEngine }) => {
  const [play, setPlay] = useState<boolean>(false);

  const words: Words = [];

  const levelSelectHandler = (level: number) => {
    console.log(level);
    // words = ....
    // setPlay(words.length > 0);
    setPlay(true);
  };

  return !play
    ? (
      <div className="game-info">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <LevelSelector onLevelSelect={levelSelectHandler} />

      </div>
    )
    : <GameController words={words} GameEngine={GameEngine} />;
};

export default GameLobby;
