import GameLobby from '../game-common/game-lobby';
import gamesCardData from '../games-card/games-card-data';
import GameCall from './game-call-play/game-call';

const GameCallMenu = () => {
  const data = gamesCardData.find(({ path }) => path === 'call');
  return (
    <GameLobby
      title={data ? data.title : ''}
      description={data ? data.description : ''}
      GameEngine={GameCall}
      wordsCount={data ? data.wordsCount : 12}
    />
  );
};

export default GameCallMenu;
