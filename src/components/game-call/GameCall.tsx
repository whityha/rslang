import { Box } from '@mui/material';
import { useState } from 'react';
import theme from '../../theme/theme';
import GameCallMenu from './Menu/GameCallMenu';
import GameCallPlay from './Play/GameCallPlay';
import { TGameState } from './types';

const GameCall = () => {
  const [currentPage, setCurrent] = useState<number>(0);
  const changeCurrentPage = (num: number) => {
    setCurrent(num);
  };

  const [active, setActive] = useState<TGameState>('menu');
  const changeActive = (state: TGameState) => {
    setActive(state);
  };

  return (
    <Box sx={{
      bgcolor: theme.palette.grey.A200,
      height: '100%',
    }}
    >
      {active === 'menu'
        ? (
          <GameCallMenu
            activeMain={[active, changeActive]}
            wordPage={[currentPage, changeCurrentPage]}
          />
        )
        : <GameCallPlay /> }
    </Box>
  );
};

export default GameCall;
