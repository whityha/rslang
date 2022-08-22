import { FC } from 'react';
import { useWordListContext } from '../../context/word-list-context';

interface CardMarkerProps {
  color: string;
}

const CardMarker: FC<CardMarkerProps> = ({ color }) => {
  const context = useWordListContext();

  if (!context) return null;
  const { showTranslation } = context;

  return (
    <div style={{ width: 4, height: showTranslation ? 60 : 30, backgroundColor: color }} />
  );
};

export default CardMarker;
