import { FC } from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import IconGroup from './icon-group';
import CardMarker from './card-marker';

interface WordCardHeaderProps {
  word: string;
  transcription: string;
  translate: string;
  showTranslation: boolean;
}

const WordCardHeader: FC<WordCardHeaderProps> = ({
  word,
  transcription,
  translate,
  showTranslation,
}) => (
  <Box sx={{ display: 'flex', alignItems: 'center', pl: 2 }}>
    <CardMarker color="#cccccc" />
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', color: '#000000' }}>
        <Typography
          sx={{
            mr: 1,
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: 1,
          }}
          component="div"
        >
          {word}
        </Typography>
        <Typography component="div">{transcription}</Typography>
      </Box>

      {showTranslation && <Typography component="div">{translate}</Typography>}
    </CardContent>
    <IconGroup />
  </Box>
);

export default WordCardHeader;
