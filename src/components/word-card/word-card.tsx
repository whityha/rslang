import { FC } from 'react';

import { Grid, Card, Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Word } from '../../types/word';

import image from '../../tmp/01_0001.jpg';
import IconGroup from './icon-group';

interface IWordCard extends Word {
  showTranslation: boolean;
}

const WordCard: FC<IWordCard> = ({
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
    <Card sx={{ display: 'flex' }}>
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
      }}
      >
        <IconGroup />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div">
            {word}
          </Typography>
          <Typography component="div">
            { transcription }
          </Typography>
          { showTranslation && (
          <Typography component="div">
            { wordTranslate }
          </Typography>
          ) }
        </CardContent>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body1">
            {textMeaning}
          </Typography>
          { showTranslation && (
          <Typography component="div">
            { textMeaningTranslate }
          </Typography>
          ) }
        </CardContent>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body1">
            {textExample}
          </Typography>
          { showTranslation && (
          <Typography component="div">
            { textExampleTranslate }
          </Typography>
          ) }
        </CardContent>
      </Box>
    </Card>
  </Grid>
);

export default WordCard;
