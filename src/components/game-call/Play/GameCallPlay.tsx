import {
  Box, Button, CircularProgress, IconButton, Stack, Typography,
} from '@mui/material';
import VolumeUpTwoToneIcon from '@mui/icons-material/VolumeUpTwoTone';
import { useState } from 'react';
import theme from '../../../theme/theme';

const GameCallPlay = () => {
  const [currentWord] = useState('ПРИВЕТ');

  const value = 97;
  const minProgress = 30;
  const maxProgress = 75;
  const getColor = (valueAccurance: number): 'error' | 'warning' | 'success' => {
    if (valueAccurance <= minProgress) return 'error';
    if (valueAccurance > minProgress && valueAccurance < maxProgress) return 'warning';
    return 'success';
  };
  return (
    <Box sx={{
      bgcolor: theme.palette.grey.A200,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: '5em',
    }}
    >
      <Stack spacing={3} sx={{ alignItems: 'center' }}>
        <Typography variant="h4">Процент правильных ответов </Typography>
        <Box sx={{
          position: 'relative',
        }}
        >
          <Typography
            variant="h6"
            sx={{
              position: 'absolute',
              top: 50,
              left: 50,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {value}
            %

          </Typography>
          <CircularProgress color={getColor(value)} variant="determinate" value={value} size="100px" />
        </Box>
      </Stack>
      <IconButton size="large">
        <VolumeUpTwoToneIcon fontSize="large" />
      </IconButton>
      <Stack direction="row" spacing={3}>
        <Button variant="contained">
          {currentWord}
          {' '}
          1
        </Button>
        <Button variant="contained">
          {currentWord}
          {' '}
          2

        </Button>
        <Button variant="contained">
          {currentWord}
          {' '}
          3

        </Button>
        <Button variant="contained">
          {currentWord}
          {' '}
          4

        </Button>
      </Stack>
    </Box>
  );
};

export default GameCallPlay;
