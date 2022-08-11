import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const All: FC = () => (
  <div id="all">
    <Header />
    <div id="main">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default All;
