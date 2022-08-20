import { FC, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import WordCard from '../word-card/word-card';
import { Word, Words } from '../../types/word';
import { getFilesRoot } from '../../inc/conf';

interface WordListProps {
  words: Words,
  showTranslation: boolean;
}

export interface Playback {
  [key: string]: HTMLAudioElement[];
}

const WordList: FC<WordListProps> = ({ words, showTranslation }) => {
  const url = getFilesRoot();
  const [playback, setPlayback] = useState<Playback | null>(null);
  useEffect(() => {
    const sources = words
      .reduce((acc, word) => {
        const array = [
          new Audio(url + word.audio),
          new Audio(url + word.audioMeaning),
          new Audio(url + word.audioExample)];
        return { ...acc, [word.id]: array };
      }, {});
    setPlayback(sources);
  }, []);

  return (
    <Grid container spacing={3}>
      {words.map((word: Word) => (
        <WordCard key={word.id} showTranslation={showTranslation} {...word} playback={playback} />
      ))}
    </Grid>
  );
};

export default WordList;
