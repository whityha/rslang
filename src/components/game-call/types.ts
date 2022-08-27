import { Word } from '../../types/word';

export type TGameState = 'menu' | 'game'
export type TGameWord = {
    word: Word;
    translates: Array<string>;
}
