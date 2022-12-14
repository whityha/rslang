import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AudioGroup from './audio-group';
import LightTooltip from '../light-tooltip.tsx/light-tooltip';
import { useWordListContext, IWordListContext } from '../../context/word-list-context';
import { AggWord, Diff, setUserWord } from '../../inc/api';
import StatisticGroup from './statistic-group';
import { useAppDispatch, useAuth } from '../../redux/hooks';
import { setWordExtra } from '../../redux/words/slice';

export interface IconGroupProps {
  data: AggWord;
  paths: string[];
}

export interface IconStyles {
  height: number;
  width: number;
}

const IconGroup: FC<IconGroupProps> = ({ data, paths }) => {
  const { id, word } = data;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const context: IWordListContext | null = useWordListContext();
  const auth = useAuth();
  const dispatch = useAppDispatch();

  const styles: IconStyles = {
    height: 35,
    width: 35,
  };

  if (!context) return null;
  const {
    activeBook,
  } = context;

  const isDifficult = () => data.userWord
  && data.userWord.difficulty
  && (data.userWord.difficulty === Diff.HARD);
  const isStudied = () => data.userWord
  && data.userWord.difficulty
  && (data.userWord.difficulty === Diff.STUDIED);

  const toggleDifficultWord = (): void => {
    if (isDifficult()) {
      setUserWord(id, Diff.UNSET);
      dispatch(setWordExtra({ id, diff: Diff.UNSET }));

      // setDifficultWords([...difficultWords.filter((item) => item.id !== id)]);
    } else {
      setUserWord(id, Diff.HARD);
      dispatch(setWordExtra({ id, diff: Diff.HARD }));
      // setDifficultWords([...difficultWords, data]);
    }
  };

  const toggleStudiedWord = (): void => {
    if (isStudied()) {
      setUserWord(id, Diff.UNSET);
      dispatch(setWordExtra({ id, diff: Diff.UNSET }));
      // setStudied([]);
    } else {
      setUserWord(id, Diff.STUDIED);
      dispatch(setWordExtra({ id, diff: Diff.STUDIED }));
      // setStudied([...studied, id]);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        pt: matches ? 1 : 'initial',
        ml: matches ? 'initial' : -1,
      }}
    >
      {auth.isAuth && (
      <>
        <LightTooltip
          title={isDifficult() ? '?????????????? ???? ?????????????? ????????' : '???????????????? ?? ?????????????? ??????????'}
        >
          <IconButton onClick={toggleDifficultWord}>
            <StarIcon sx={{ ...styles, color: isDifficult() ? activeBook.color : '#c4c1c1' }} />
          </IconButton>
        </LightTooltip>
        <LightTooltip
          title={isStudied() ? '???????????????? ?????? ??????????????????????' : '???????????????? ?????? ??????????????????'}
        >
          <IconButton onClick={toggleStudiedWord}>
            <LightbulbIcon sx={{ ...styles, color: isStudied() ? activeBook.color : '#c4c1c1' }} />
          </IconButton>
        </LightTooltip>
        <StatisticGroup
          word={word}
          id={id}
          styles={styles}
          color={activeBook.color}
        />
      </>
      )}
      <AudioGroup
        id={id}
        paths={paths}
        styles={styles}
        color={activeBook.color}
      />
    </Box>
  );
};

export default IconGroup;
