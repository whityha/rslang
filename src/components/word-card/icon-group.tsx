import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AudioGroup from './audio-group';
import LightTooltip from '../light-tooltip.tsx/light-tooltip';
import { useWordListContext } from '../../context/word-list-context';

export interface IconGroupProps {
  id: string;
  paths: string[];
}

const IconGroup: FC<IconGroupProps> = ({ id, paths }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const context = useWordListContext();

  const styles = {
    height: 35,
    width: 35,
  };

  if (!context) return null;
  const {
    activeBook, difficult, setDifficult, studied, setStudied,
  } = context;

  const toggleDifficultWord = (): void => {
    if (difficult.includes(id)) {
      setDifficult([...difficult.filter((wordId) => wordId !== id)]);
    } else {
      setDifficult([...difficult, id]);
    }
  };

  const toggleStudiedWord = (): void => {
    if (studied.includes(id)) {
      setStudied([]);
    } else {
      setStudied([...studied, id]);
    }
  };

  const isDifficult = difficult.includes(id);
  const isStudied = studied.includes(id);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        pt: matches ? 1 : 'initial',
        ml: matches ? 'initial' : -1,
      }}
    >
      <LightTooltip
        title={isDifficult ? 'Удалить из Сложных слов' : 'Добавить в Сложные слова'}
      >
        <IconButton onClick={toggleDifficultWord}>
          <StarIcon sx={{ ...styles, color: isDifficult ? activeBook.color : '#c4c1c1' }} />
        </IconButton>
      </LightTooltip>
      <LightTooltip
        title={isStudied ? 'Отметить как неизученное' : 'Отметить как изученное'}
      >
        <IconButton onClick={toggleStudiedWord}>
          <LightbulbIcon sx={{ ...styles, color: isStudied ? activeBook.color : '#c4c1c1' }} />
        </IconButton>
      </LightTooltip>
      <AudioGroup
        id={id}
        paths={paths}
        styles={{ ...styles, color: activeBook.color }}
      />
    </Box>
  );
};

export default IconGroup;
