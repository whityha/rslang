import { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from './header/header';
import Footer from './footer';
import Menu from './menu';
import MobileMenu from './mobile-menu';
import { useWords } from '../redux/hooks';

const AllLayout: FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const { pathname } = useLocation();

  const words = useWords();

  return (
    <Box sx={{ display: 'flex' }}>
      <Menu />
      <MobileMenu openMenu={openMobileMenu} setOpenMenu={setOpenMobileMenu} />
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: (pathname.includes('textbook') && words.allHard) ? 'lightgray' : 'white',
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
