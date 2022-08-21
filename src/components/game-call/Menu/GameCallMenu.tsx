import {
  Box, Button, Typography, Stack,
} from '@mui/material';
import theme from '../../../theme/theme';
import { TGameState } from '../types';
import ButtonBook from './ButtonBook';

const GameCallMenu = ({ activeMain, wordPage }:
    {
      activeMain: [TGameState, (state: TGameState) => void],
      wordPage: [number, (number: number) => void]}) => {
  const [currentPage, changeCurrentPage] = wordPage;
  const [active, changeActive] = activeMain;
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
      <Typography variant="h5">Выберите книгу</Typography>
      <Stack direction="row" spacing={2} my={7}>
        <ButtonBook current={currentPage} id={0} changeCurrent={changeCurrentPage} inner="1" />
        <ButtonBook current={currentPage} id={1} changeCurrent={changeCurrentPage} inner="2" />
        <ButtonBook current={currentPage} id={2} changeCurrent={changeCurrentPage} inner="3" />
        <ButtonBook current={currentPage} id={3} changeCurrent={changeCurrentPage} inner="4" />
        <ButtonBook current={currentPage} id={4} changeCurrent={changeCurrentPage} inner="5" />
        <ButtonBook current={currentPage} id={5} changeCurrent={changeCurrentPage} inner="6" />
        <ButtonBook current={currentPage} id={6} changeCurrent={changeCurrentPage} inner="Сложные" />
      </Stack>
      <Button
        variant="contained"
        color="success"
        onClick={() => changeActive(active === 'menu' ? 'game' : 'menu')}
      >
        НАЧАТЬ ИГРУ

      </Button>

    </Box>
  );
};

export default GameCallMenu;
