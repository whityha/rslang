import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AudioGroup from './audio-group';
import LightTooltip from '../light-tooltip.tsx/light-tooltip';

const styles = {
  height: 35,
  width: 35,
};

export interface IconGroupProps {
  paths: string[];
}

const IconGroup: FC<IconGroupProps> = ({ paths }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        pt: matches ? 1 : 'initial',
        ml: matches ? 'initial' : -1,
      }}
    >
      <LightTooltip title="Добавить в Сложные слова">
        <IconButton>
          <StarIcon sx={styles} />
        </IconButton>
      </LightTooltip>
      <LightTooltip title="Ещё не изучено">
        <IconButton>
          <LightbulbIcon sx={styles} />
        </IconButton>
      </LightTooltip>
      <AudioGroup
        paths={paths}
        styles={styles}
      />
    </Box>
  );
};

export default IconGroup;
