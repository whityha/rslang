import {
  Box, Button, Typography, Stack, Input,
} from '@mui/material';
import { useRef } from 'react';
import theme from '../../../theme/theme';
import { TGameState } from '../types';
import ButtonBook from './ButtonBook';
import GROUP_NAMES from '../constants.tsx/constants';

const GameCallMenu = ({
  activeMain, wordGroup, wordsCount, changeWordsCount,
}:
    {
      activeMain: [TGameState, (state: TGameState) => void],
      wordGroup: [number, (number: number) => void],
      wordsCount: number,
      changeWordsCount: (number: number) => void,
    }) => {
  const [currentGroup, changeCurrentGroup] = wordGroup;
  const [, changeActive] = activeMain;
  const inputEl = useRef<HTMLDivElement | null>(null);
  const handlePlay = () => {
    if (inputEl.current) {
      const input = inputEl.current?.firstElementChild as HTMLInputElement;
      changeWordsCount(Number(input.value));
    }
    changeActive('game');
  };
  return (
    <Box sx={{
      bgcolor: theme.palette.grey.A200,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <Typography variant="h2" my="3em">Аудиовызов</Typography>
      <Typography variant="h5">Выберите уровень</Typography>
      <Stack direction="row" spacing={2} mt={3} mb={7}>
        {GROUP_NAMES.map((item, idx) => (
          <ButtonBook
            key={currentGroup + item}
            current={currentGroup}
            id={idx}
            changeCurrent={changeCurrentGroup}
            inner={item}
          />
        ))}
      </Stack>
      <Typography variant="h5">Количество слов в игре (от 1 до 600)</Typography>
      <Input
        type="text"
        ref={inputEl}
        size="small"
        defaultValue={wordsCount}
        sx={{
          marginBottom: '1rem',
        }}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handlePlay}
      >
        Продолжить

      </Button>

    </Box>
  );
};

export default GameCallMenu;
