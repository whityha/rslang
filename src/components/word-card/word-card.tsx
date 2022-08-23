import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Grid, Card, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Word } from '../../types/word';

import { getFilesRoot } from '../../inc/conf';
import TextContainer from './text-container';
import WordCardHeader from './word-card-header';

const WordCard: FC<Word> = ({
  id,
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
            id={id}
            word={word}
            transcription={transcription}
            translate={wordTranslate}
            paths={paths}
          />
          <TextContainer
            text={textMeaning}
            translate={textMeaningTranslate}
          />
          <TextContainer
            text={textExample}
            translate={textExampleTranslate}
          />
        </Box>
      </Card>
    </Grid>
  );
};

export default WordCard;
