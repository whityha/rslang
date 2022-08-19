import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Grid, Card, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Word } from '../../types/word';

import TextContainer from './text-container';
import WordCardHeader from './word-card-header';

import image from '../../assets/images/01_0001.jpg';

interface WordCardProps extends Word {
  showTranslation: boolean;
}

const WordCard: FC<WordCardProps> = ({
  word,
  transcription,
  wordTranslate,
  textExample,
  textMeaning,
  textMeaningTranslate,
  textExampleTranslate,
  showTranslation,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

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
        // image="/static/images/cards/live-from-space.jpg"
          src={image}
          alt={word}
        />
        <Box sx={{
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
