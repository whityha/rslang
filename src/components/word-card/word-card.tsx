import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Grid, Card, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Word } from '../../types/word';

import { getFilesRoot } from '../../inc/conf';
import TextContainer from './text-container';
import WordCardHeader from './word-card-header';

interface WordCardProps extends Word {
  showTranslation: boolean;
  currentTracks: NodeListOf<HTMLAudioElement> | null;
  setCurrentTracks: (value: NodeListOf<HTMLAudioElement> | null) => void;
  currentPlayer: string;
  setCurrentPlayer: (value: string) => void;
}

const WordCard: FC<WordCardProps> = ({
  word,
  image,
  transcription,
  wordTranslate,
  textExample,
  textMeaning,
  textMeaningTranslate,
  textExampleTranslate,
  audio,
  audioMeaning,
  audioExample,
  currentTracks,
  setCurrentTracks,
  currentPlayer,
  setCurrentPlayer,
  showTranslation,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const url = getFilesRoot();
  const paths = [audio, audioMeaning, audioExample].map((path) => url + path);

  return (
    <Grid item xs={12}>
      <Card
        sx={{
          display: 'flex',
          boxShadow: 2,
          flexDirection: matches ? 'row' : 'column',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: matches ? '30%' : 'initial' }}
          image={url + image}
          alt={word}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            py: 1,
            pr: 3,
          }}
        >
          <WordCardHeader
            word={word}
            transcription={transcription}
            translate={wordTranslate}
            showTranslation={showTranslation}
            currentTracks={currentTracks}
            setCurrentTracks={setCurrentTracks}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            paths={paths}
          />
          <TextContainer
            text={textMeaning}
            translate={textMeaningTranslate}
            showTranslation={showTranslation}
          />
          <TextContainer
            text={textExample}
            translate={textExampleTranslate}
            showTranslation={showTranslation}
          />
        </Box>
      </Card>
    </Grid>
  );
};

export default WordCard;
