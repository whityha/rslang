import { FC } from 'react';
import { Grid } from '@mui/material';
import WordCard from '../word-card/word-card';
import { Word, Words } from '../../types/word';

interface WordListProps {
  words: Words,
  showTranslation: boolean;
}

const WordList: FC<WordListProps> = ({ words, showTranslation }) => (
  <Grid container spacing={3}>
    {words.map((word: Word) => (
      <WordCard key={word.id} showTranslation={showTranslation} {...word} />
    ))}
  </Grid>
);

export default WordList;
