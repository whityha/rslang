import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import './style.scss';

const Loading: FC = () => (
  <div className="loader-cont">
    <div className="loader">
      <CircularProgress />
    </div>
  </div>
);
export default Loading;
