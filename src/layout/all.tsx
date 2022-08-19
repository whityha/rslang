import { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
import MobileMenu from './mobile-menu';

const AllLayout: FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
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
        { !pathname.includes('games') && <Footer /> }
      </Box>
    </Box>
  );
};

export default AllLayout;
