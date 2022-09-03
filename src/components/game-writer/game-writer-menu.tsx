import GameLobby from '../game-common/game-lobby';
import gamesCardData from '../games-card/games-card-data';
import GameWriter from './game-writer-play/game-writer';

const GameWriterMenu = () => {
  const data = gamesCardData.find(({ path }) => path === 'writer');
  return (
    <GameLobby
      title={data ? data.title : ''}
      description={data ? data.description : ''}
      GameEngine={GameWriter}
      wordsCount={data ? data.wordsCount : 12}
    />
  );
};

export default GameWriterMenu;
