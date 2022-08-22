import { Box } from '@mui/material';
import { useState } from 'react';
import theme from '../../theme/theme';
import { START_PAGE } from './constants.tsx/constants';
import GameCallMenu from './menu/GameCallMenu';
import GameCallPlay from './play/GameCallPlay';
import { TGameState } from './types';

const GameCall = () => {
  const [wordsCount, setWordsCount] = useState(20);
  const changeWordsCount = (num: number) => { setWordsCount(num); };

  const [currentGroup, setCurrent] = useState<number>(0);
  const changeCurrentGroup = (num: number) => {
    setCurrent(num);
  };

  const [active, setActive] = useState<TGameState>(START_PAGE);
  const changeActive = (state: TGameState) => {
    setActive(state);
  };

  return (
    <Box sx={{
      bgcolor: theme.palette.grey.A200,
      height: '100%',
    }}
    >
      {
        (active === 'menu')
          ? (
            <GameCallMenu
              activeMain={[active, changeActive]}
              wordGroup={[currentGroup, changeCurrentGroup]}
              wordsCount={wordsCount}
              changeWordsCount={changeWordsCount}
            />
          )
          : (
            <GameCallPlay
              currentGroup={currentGroup}
              activeMain={[active, changeActive]}
              wordsCount={wordsCount}
            />
          )
          }
    </Box>
  );
};

export default GameCall;
