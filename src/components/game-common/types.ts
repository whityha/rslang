import { Words } from '../../types/word';
import GameCall from '../game-call/game-call-play/game-call';
import GameSprint from '../game-sprint/game-sprint';

export type GameName = 'sprint' | 'call' | 'writer';

export type GameWordsResult = {
  goodWords: Words;
  badWords: Words;
  unusedWords?: Words;
  gameName: GameName;
  serie: number;
}

export type PossibleGames = typeof GameSprint | typeof GameCall

export type GameProps = {
  words: Words,
  onFinish: (result: GameWordsResult) => void
}

export type GamesInfoProps = {
  title: string;
  description: string;
  path: string;
  wordsCount: number
}
