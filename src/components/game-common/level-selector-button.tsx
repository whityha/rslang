import { Button } from '@mui/material';
import { FC } from 'react';

type Props = {
  level: number;
  onClick: () => void;
}

const LevelSelectorButton: FC<Props> = ({ level, onClick }) => (
  <Button sx={{ m: 1 }} variant="contained" onClick={onClick}>{level}</Button>
);
export default LevelSelectorButton;
