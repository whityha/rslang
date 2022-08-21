import { FC, useState } from 'react';
import { Grid } from '@mui/material';
import WordCard from '../word-card/word-card';
import { Word, Words } from '../../types/word';

interface WordListProps {
  words: Words;
  showTranslation: boolean;
}

const WordList: FC<WordListProps> = ({ words, showTranslation }) => {
  const [currentTracks, setCurrentTracks] = useState<NodeListOf<HTMLAudioElement> | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<string>('');
  return (
    <Grid container spacing={3}>
      {words.map((word: Word) => (
        <WordCard
          key={word.id}
          {...word}
          currentTracks={currentTracks}
          setCurrentTracks={setCurrentTracks}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          showTranslation={showTranslation}
        />
      ))}
    </Grid>
  );
};

export default WordList;
