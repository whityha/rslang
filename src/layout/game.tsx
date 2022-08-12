import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

const GameLayout: FC = () => (
  <div className="all">
    <Header />
    <div className="game">
      <Outlet />
    </div>
  </div>
);

export default GameLayout;
