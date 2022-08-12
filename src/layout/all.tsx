import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const AllLayout: FC = () => (
  <div className="all">
    <Header />
    <div className="main">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default AllLayout;
