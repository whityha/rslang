import {
  Box, Button, IconButton, Stack, Typography, useMediaQuery,
} from '@mui/material';
import {
  FC, useEffect, useRef, useState,
} from 'react';
import VolumeUpTwoToneIcon from '@mui/icons-material/VolumeUpTwoTone';
import { getFilesRoot } from '../../../inc/conf';
import theme from '../../../theme/theme';
import { Word, Words } from '../../../types/word';
import Circus from '../../game-common/game-circus';
import { GameProps } from '../../game-common/types';
import './game-writer.sass';

const GameWriter: FC<GameProps> = ({ words, onFinish }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [goodWords, setGoodWords] = useState<Words>([]);
  const [badWords, setBadWords] = useState<Words>([]);
  const userInputEn = useRef<HTMLInputElement>(null);
  const userInputRu = useRef<HTMLInputElement>(null);
  const [serie, setSerie] = useState(0);
  const [maxSerie, setMaxSerie] = useState(0);
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  const circusValue = () => (currentWord ? Math.ceil((goodWords.length / currentWord) * 100) : 0);
  const url = getFilesRoot();
  const audio = useRef<HTMLAudioElement>(null);
  let path;
  if (words[currentWord]) path = url + words[currentWord].audio;
  const playAudio = () => {
    if (audio.current) {
      audio.current.play();
    }
  };
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
  const checkWord = (currentW: Word, userW: string, userT: string) => {
    if (currentW.word.toLowerCase() === userW.toLowerCase()
    && currentW.wordTranslate.toLowerCase() === userT.toLowerCase()) {
      changeGoodWords(currentW);
    } else {
      changeBadWords(currentW);
    }
  };
  let handleButton: (num: number) => void;
  useEffect(() => {
    handleButton = (num: number) => {
      if (userInputEn.current && userInputRu.current) {
        checkWord(words[num], userInputEn.current.value, userInputRu.current.value);
      }
      nextWord();
    };
    playAudio();

    if (userInputEn.current && userInputRu.current) {
      userInputEn.current.focus();
      userInputEn.current.value = '';
      userInputRu.current.value = '';
    }
  }, [currentWord]);
  if (words.length === currentWord) {
    onFinish({
      goodWords,
      badWords,
      gameName: 'writer',
      serie: maxSerie,
    });
  }
  return (
    <Box
      sx={{
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
          sx={{ width: matchesMD ? '600px' : '280px' }}
        >
          <input className="user-word" ref={userInputEn} placeholder="Введите английское название" />
          <input className="user-word" ref={userInputRu} placeholder="Введите перевод" />
        </Stack>
        <Button
          variant="contained"
          onClick={() => {
            handleButton(currentWord);
          }}
        >
          Ответить

        </Button>
      </Box>
    </Box>
  );
};

export default GameWriter;
