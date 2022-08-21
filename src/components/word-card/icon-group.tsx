import { FC, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Zoom from '@mui/material/Zoom';

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

interface IconGroupProps {
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
  const btnRef = useRef<HTMLButtonElement>(null);
  const playAudio = (): void => {
    if (btnRef.current) {
      setCurrentPlayer(paths[0]);
      const tracks = btnRef.current.querySelectorAll(
        'audio',
      ) as NodeListOf<HTMLAudioElement>;
      if (currentTracks) {
        currentTracks.forEach((track) => {
          track.pause();
          track.currentTime = 0;
        });
      }
      setCurrentTracks(tracks);
      for (let i = 0; i < tracks.length; i += 1) {
        if (!i) {
          tracks[i].play();
        } else {
          tracks[i - 1].addEventListener('ended', () => tracks[i].play(), { once: true });
        }
        tracks[tracks.length - 1].addEventListener('ended', () => setCurrentPlayer(''), { once: true });
      }
    }
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
      <IconButton onClick={playAudio} ref={btnRef}>
        {currentPlayer === paths[0]
          ? <StopCircleOutlinedIcon sx={styles} />
          : <VolumeUpIcon sx={styles} />}
        {paths.map((path) => (
          <audio key={path} src={path}>
            <track kind="captions" />
          </audio>
        ))}
      </IconButton>
    </Box>
  );
};

export default IconGroup;
