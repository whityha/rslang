import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const GameLayout: FC = () => (
  <div className="all">
    <div className="game">
      <Outlet />
    </div>
  </div>
);

export default GameLayout;
