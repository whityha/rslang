import { FC } from 'react';

interface CardMarkerProps {
  color: string;
  showTranslation: boolean;
}

const CardMarker: FC<CardMarkerProps> = ({ color, showTranslation }) => (
  <div style={{ width: 3, height: showTranslation ? 60 : 30, backgroundColor: color }} />
);

export default CardMarker;
