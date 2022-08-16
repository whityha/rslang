import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './header';
import Footer from './footer';
import Menu from './menu';

const AllLayout: FC = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Menu />
    <Box sx={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
    >
      <Header />
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          py: 4,
          bgcolor: '#ccc',
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  </Box>
);

export default AllLayout;
