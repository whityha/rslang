import GameLobby from '../game-common/game-lobby';
import gamesCardData from '../games-card/games-card-data';
import GameSprint from './game-sprint';

const GameSprintMenu = () => {
  const data = gamesCardData.find(({ path }) => path === 'sprint');
  return (
    <GameLobby
      title={data ? data.title : ''}
      description={data ? data.description : ''}
      GameEngine={GameSprint}
      wordsCount={data ? data.wordsCount : 10}
    />
  );
};

export default GameSprintMenu;
