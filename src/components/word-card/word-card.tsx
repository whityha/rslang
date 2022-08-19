import { FC } from 'react';

import { Grid, Card, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Word } from '../../types/word';

import TextContainer from './text-container';
import WordCardHeader from './word-card-header';

import image from '../../tmp/01_0001.jpg';

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
}) => (
  <Grid item xs={12}>
    <Card sx={{ position: 'relative', display: 'flex', boxShadow: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: '30%' }}
        // image="/static/images/cards/live-from-space.jpg"
        src={image}
        alt={`a picture of the word "${word}" to be studied`}
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

export default WordCard;
