import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import OurTeam from '../components/out-team/our-team';
import Footer from './footer';
import Header from './header';

const AllLayout: FC = () => (
  <div className="all">
    <Header />
    <div className="main">
      <OurTeam />
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default AllLayout;
