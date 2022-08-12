import { FC } from 'react';
import Menu from './menu';

const Header: FC = () => (
  <header className="header">
    Header. Logo component. Auth/login block.
    {' '}
    <Menu />
  </header>
);

export default Header;
