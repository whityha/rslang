import { Words } from '../../types/word';
import GameSprint from '../game-sprint/game-sprint';

export type GameWordsResult = {
  goodWords: Words;
  badWords: Words;
}

export enum GameStatus {
  LOBBY,
  PLAY,
  FINISH
}

export type PossibleGames = typeof GameSprint // TODO: add | typeof GameCall

export type GameProps = {
  words: Words,
  onFinish: (result: GameWordsResult) => void
}

export const emptyGameResult = { goodWords: [], badWords: [] };

export type GamesInfoProps = {
  title: string;
  description: string;
  path: string;
}
