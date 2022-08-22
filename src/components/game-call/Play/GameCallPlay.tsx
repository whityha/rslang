import {
  Box, Button, CircularProgress, IconButton, Stack, Typography,
} from '@mui/material';
import VolumeUpTwoToneIcon from '@mui/icons-material/VolumeUpTwoTone';
import { useEffect, useState } from 'react';
import theme from '../../../theme/theme';
import api from '../../../inc/api';
import { createRandomNumberArray, TRANSLATE_VARIANTS } from '../constants.tsx/constants';
import { TGameState, TGameWord } from '../types';
import { Words } from '../../../types/word';

const GameCallPlay = ({ currentGroup, activeMain, wordsCount }:
  {
    currentGroup: number,
    activeMain: [TGameState, (state: TGameState) => void],
    wordsCount: number,
  }) => {
  const [gameArray, setGameArray] = useState([] as TGameWord[]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [, setError] = useState<boolean>(false);

  const value = 97;
  const minProgress = 30;
  const maxProgress = 75;
  const getColor = (valueAccurance: number): 'error' | 'warning' | 'success' => {
    if (valueAccurance <= minProgress) return 'error';
    if (valueAccurance > minProgress && valueAccurance < maxProgress) return 'warning';
    return 'success';
  };

  const INITINAL_ARRAY = createRandomNumberArray(30, [0, 29]);
  let GAME_ARRAY;
  let TRANSLATE_NUMBERS_ARRAY: Array<number>;
  useEffect(() => {
    Promise.all(INITINAL_ARRAY.map((page) => api('GET', `/words?group=${currentGroup}&page=${page}`)))
      .then((responseData) => {
        setLoading(false);
        const allWords = responseData.reduce((finish, words) => [
          ...finish,
          ...words.data,
        ], [] as Words);
        GAME_ARRAY = createRandomNumberArray(wordsCount, [0, allWords.length - 1])
          .map((wordIndex) => {
            const createRusArray = (idx: number): Array<string> => {
              TRANSLATE_NUMBERS_ARRAY = createRandomNumberArray(
                TRANSLATE_VARIANTS,
                [0, allWords.length - 1],
              );
              if (!TRANSLATE_NUMBERS_ARRAY.includes(idx)) {
                return TRANSLATE_NUMBERS_ARRAY.map((item: number) => allWords[item].wordTranslate);
              }
              return createRusArray(idx);
            };

            const translateWords = createRusArray(wordIndex);
            const translates = [allWords[wordIndex].wordTranslate, ...translateWords].sort();
            return {
              word: allWords[wordIndex],
              translates,
            };
          });
        setGameArray(GAME_ARRAY);
      })
      .catch(() => { setError(true); });
  }, []);
  return (
    isLoading ? <Box>LOADING....</Box>
      : (
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
              {gameArray[0].translates[0]}
            </Button>
            <Button variant="contained">
              {gameArray[0].translates[1]}
            </Button>
            <Button variant="contained">
              {gameArray[0].translates[2]}
            </Button>
            <Button variant="contained" onClick={() => { activeMain[1]('menu'); }}>
              {gameArray[0].translates[3]}
            </Button>
          </Stack>
        </Box>
      )
  );
};

export default GameCallPlay;
