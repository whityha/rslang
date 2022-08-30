import {
  Box, IconButton, Stack, Typography, useMediaQuery,
} from '@mui/material';
import VolumeUpTwoToneIcon from '@mui/icons-material/VolumeUpTwoTone';
import { useEffect, useRef, useState } from 'react';
import { TGameWord } from '../types';
import Circus from './game-circus';
import theme from '../../../theme/theme';
import { GameWordsResult } from '../../game-common/types';
import { Word, Words } from '../../../types/word';
import { TRANSLATE_VARIANTS } from '../constants.tsx/constants';
import ButtonWord from './button-word';
import { getFilesRoot } from '../../../inc/conf';

const CallPlayWords = ({ gameWords, finish }:
  {
    gameWords: Array<TGameWord>,
    finish: (result: GameWordsResult) => void
  }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [goodWords, setGoodWords] = useState<Words>([]);
  const [badWords, setBadWords] = useState<Words>([]);
  const [serie, setSerie] = useState(0);
  const [maxSerie, setMaxSerie] = useState(0);
  const audio = useRef<HTMLAudioElement>(null);
  const url = getFilesRoot();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  let path;
  if (gameWords[currentWord]) path = url + gameWords[currentWord].word.audio;

  const changeGoodWords = (word: Word) => {
    const newSerie = serie + 1;
    if (newSerie > maxSerie) setMaxSerie(newSerie);
    setSerie(newSerie);
    setGoodWords([...goodWords, word]);
  };
  const changeBadWords = (word: Word) => {
    setSerie(0);
    setBadWords([...badWords, word]);
  };

  const nextWord = () => {
    const rand = currentWord + 1;
    setCurrentWord(rand);
  };
  const checkWord = (currentW: TGameWord, transl: string) => {
    if (currentW.word.wordTranslate === transl) {
      changeGoodWords(currentW.word);
    } else {
      changeBadWords(currentW.word);
    }
  };

  const handleButton = (num: number) => {
    checkWord(gameWords[currentWord], gameWords[currentWord].translates[num]);
    nextWord();
  };

  const playAudio = () => {
    if (audio.current) {
      audio.current.play();
    }
  };

  useEffect(() => {
    playAudio();
  }, [currentWord]);

  const circusValue = () => (currentWord ? Math.ceil((goodWords.length / currentWord) * 100) : 0);

  if (gameWords.length === currentWord) {
    finish({
      goodWords,
      badWords,
      gameName: 'call',
      serie: maxSerie,
    });
  }

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
        <Typography variant={matchesMD ? 'h4' : 'h5'} textAlign="center" p={2}>Процент правильных ответов </Typography>
        <Circus value={circusValue()} />
      </Stack>
      <Box
        display="flex"
        sx={{
          flexDirection: 'column',
          rowGap: '2rem',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            color: theme.palette.success.light,
          }}
        >
          <Typography
            variant="body2"
            textAlign="center"
          >
            ПОВТОРИТЬ

          </Typography>
          <IconButton
            onClick={playAudio}
            sx={{
              alignContent: 'flex-start',
              display: 'flex',
              flexDirection: 'column',
              color: 'inherit',
            }}
          >
            <VolumeUpTwoToneIcon sx={{
              fontSize: '5rem',
            }}
            />
            <audio
              ref={audio}
              key={path}
              src={path}
            >
              <track kind="captions" />
            </audio>
          </IconButton>
        </Box>
        <Stack
          spacing={3}
          direction={matchesMD ? 'row' : 'column'}
          mb={3}
        >
          {
          Array(TRANSLATE_VARIANTS + 1).fill(null).map((_, i) => {
            if (gameWords[currentWord]) {
              return (
                <ButtonWord
                  key={gameWords[i].word.id}
                  currentTranslate={gameWords[currentWord].word.wordTranslate}
                  translate={gameWords[currentWord].translates[i]}
                  handleButton={() => handleButton(i)}
                />
              );
            }
            return null;
          })
          }
        </Stack>
      </Box>
    </Box>
  );
};

export default CallPlayWords;
