import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Zoom from '@mui/material/Zoom';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} TransitionComponent={Zoom} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[3],
    fontSize: 14,
  },
}));

const styles = {
  height: 38,
  width: 38,
};

interface IconGroupProps {
  id: string;
  playback: any;
}

const IconGroup: FC<IconGroupProps> = ({ id, playback }) => {
  const playAudio = () => {
    Object.keys(playback).forEach((key) => {
      playback[key].forEach((source: HTMLAudioElement) => {
        source.pause();
        source.currentTime = 0;
      });
    });
    const [word, meaning, example] = playback[id];
    word.play();
    word.addEventListener('ended', () => { meaning.play(); });
    meaning.addEventListener('ended', () => { example.play(); });
  };

  return (
    <Box
      sx={{
        right: 0,
        display: 'flex',
        alignItems: 'center',
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
      <IconButton onClick={playAudio}>
        <VolumeUpIcon sx={styles} />
      </IconButton>
    </Box>
  );
};

export default IconGroup;
