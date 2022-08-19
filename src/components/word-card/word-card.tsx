import { FC } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Grid } from '@mui/material';
import { Word } from '../../types/word';

import image from '../../tmp/01_0001.jpg';

const WordCard: FC<Word> = ({
  word, transcription, textExample, textMeaning, textMeaningTranslate, textExampleTranslate,
}) => (
  <Grid item xs={12}>
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        src={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="span" sx={{ mr: 2 }}>
            {word}
          </Typography>
          <Typography component="span">
            { transcription }
          </Typography>
        </CardContent>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body1">
            {textMeaning}
          </Typography>
          <Typography component="div">
            { textMeaningTranslate }
          </Typography>
        </CardContent>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body1">
            {textExample}
          </Typography>
          <Typography component="span">
            { textExampleTranslate }
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl: 1,
            pb: 1,
          }}
        >
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  </Grid>
);

export default WordCard;
