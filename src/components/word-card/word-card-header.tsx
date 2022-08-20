import { FC } from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import IconGroup from './icon-group';
import CardMarker from './card-marker';

interface WordCardHeaderProps {
  id: string;
  word: string;
  transcription: string;
  translate: string;
  playback: any;
  showTranslation: boolean;
}

const WordCardHeader: FC<WordCardHeaderProps> = ({
  id,
  word,
  transcription,
  translate,
  playback,
  showTranslation,
}) => (
  <Box sx={{ display: 'flex', alignItems: 'center', pl: 4 }}>
    <CardMarker color="#959393" showTranslation={showTranslation} />
    <CardContent sx={{ flex: '1 0 auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', color: '#666666' }}>
        <Typography
          sx={{
            mr: 1,
            fontSize: 24,
            fontWeight: 700,
          }}
          component="div"
        >
          {word}
        </Typography>
        <Typography component="div">{transcription}</Typography>
      </Box>

      {showTranslation && <Typography component="div">{translate}</Typography>}
    </CardContent>
    <IconGroup id={id} playback={playback} />
  </Box>
);

export default WordCardHeader;
