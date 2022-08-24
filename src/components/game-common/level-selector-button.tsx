import { FC } from 'react';

type Props = {
  level: number;
  onClick: () => void;
}

const LevelSelectorButton: FC<Props> = ({ level, onClick }) => (
  <button onClick={onClick}>{level}</button>
);
export default LevelSelectorButton;
