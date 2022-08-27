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
  const audio = useRef<HTMLAudioElement>(null);
  const url = getFilesRoot();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  let path;
  if (gameWords[currentWord]) path = url + gameWords[currentWord].word.audio;

  const changeGoodWords = (word: Word) => {
    setGoodWords([...goodWords, word]);
  };
  const changeBadWords = (word: Word) => {
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
      console.log('PLAY');
      audio.current.play();
    }
  };

  useEffect(() => {
    playAudio();
  }, [currentWord]);

  if (gameWords.length === currentWord) {
    finish({
      goodWords,
      badWords,
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
        <Typography variant={matchesMD ? 'h4' : 'h6'}>Процент правильных ответов </Typography>
        <Circus value={97} />
      </Stack>
      <Box
        display="flex"
        sx={{
          flexDirection: 'column',
          rowGap: '2rem',
          alignItems: 'center',
        }}
      >
        <IconButton
          onClick={playAudio}
          sx={{
            alignContent: 'flex-start',
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
