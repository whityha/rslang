import { IconButton } from '@mui/material';
import { FC, useRef } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import { IconGroupProps } from './icon-group';

interface AudioGroupProps extends IconGroupProps {
  styles: {
    height: number;
    width: number;
  };
}

const AudioGroup: FC<AudioGroupProps> = ({
  paths,
  currentTracks,
  setCurrentTracks,
  currentPlayer,
  setCurrentPlayer,
  styles,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const playAudio = (): void => {
    if (btnRef.current) {
      if (currentPlayer === paths[0]) {
        setCurrentPlayer('');
        if (currentTracks) {
          currentTracks.forEach((track) => {
            track.pause();
            track.currentTime = 0;
          });
        }
        return;
      }
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
          tracks[i - 1].addEventListener('ended', () => tracks[i].play(), {
            once: true,
          });
        }
        tracks[tracks.length - 1].addEventListener(
          'ended',
          () => setCurrentPlayer(''),
          { once: true },
        );
      }
    }
  };
  return (
    <IconButton onClick={playAudio} ref={btnRef}>
      {currentPlayer === paths[0] ? (
        <StopCircleOutlinedIcon sx={styles} />
      ) : (
        <VolumeUpIcon sx={styles} />
      )}
      {paths.map((path) => (
        <audio key={path} src={path}>
          <track kind="captions" />
        </audio>
      ))}
    </IconButton>
  );
};

export default AudioGroup;
