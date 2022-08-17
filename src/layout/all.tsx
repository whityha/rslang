import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
import MobileMenu from './mobile-menu';

const AllLayout: FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Menu />
      <MobileMenu openMenu={openMobileMenu} setOpenMenu={setOpenMobileMenu} />
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
      >
        <Header setOpen={setOpenMobileMenu} />
        <Container
          component="main"
          maxWidth="lg"
          sx={{
            py: 4,
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default AllLayout;
