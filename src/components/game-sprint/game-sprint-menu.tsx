import GameLobby from '../game-common/game-lobby';
import GameSprint from './game-sprint';

const GameSprintMenu = () => (
  <GameLobby
    title="Спринт"
    description="Тренирует навык быстрого перевода с английского языка на русский.
    Выбирайте соответствует ли перевод предложенному слову и получайте очки,
    при правильном ответе."
    GameEngine={GameSprint}
  />
);

export default GameSprintMenu;
