import { FC } from 'react';

interface CardMarkerProps {
  color: string;
}

const CardMarker: FC<CardMarkerProps> = ({ color }) => (
  <div style={{ width: 3, height: '55%', backgroundColor: color }} />
);

export default CardMarker;
