import { FC } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Zoom from '@mui/material/Zoom';
import AudioGroup from './audio-group';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Zoom}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[3],
    fontSize: 14,
  },
}));

const styles = {
  height: 35,
  width: 35,
};

export interface IconGroupProps {
  paths: string[];
  currentTracks: NodeListOf<HTMLAudioElement> | null;
  setCurrentTracks: (value: NodeListOf<HTMLAudioElement> | null) => void;
  currentPlayer: string;
  setCurrentPlayer: (value: string) => void;
}

const IconGroup: FC<IconGroupProps> = ({
  paths,
  currentTracks,
  setCurrentTracks,
  currentPlayer,
  setCurrentPlayer,
}) => {
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
      <LightTooltip title="Добавить в сложные">
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
        currentTracks={currentTracks}
        setCurrentTracks={setCurrentTracks}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        styles={styles}
      />
    </Box>
  );
};

export default IconGroup;
