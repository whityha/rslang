import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header';
import Footer from './footer';
import Menu from './menu';

const AllLayout: FC = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Menu />
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </Box>
  </Box>
);

export default AllLayout;
