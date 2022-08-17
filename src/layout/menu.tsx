import React, { FC, useState } from 'react';
import {
  styled, Theme, CSSObject, useTheme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Paper } from '@mui/material';
import ListMenu from '../components/list-menu/list-menu';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Menu: FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Drawer
      sx={{
        '& .MuiDrawer-paper': {
          borderWidth: 0, bgcolor: '#f6e58d',
        },
        display: !matches ? 'none' : 'initial',
      }}
      variant="permanent"
      open={open}
    >
      <Paper
        sx={{
          minHeight: 70,
          minWidth: 0,
          mr: open ? 3 : 'auto',
          display: 'flex',
          justifyContent: open ? 'initial' : 'center',
          alignItems: 'center',
          px: 3,
          bgcolor: '#f6e58d',
        }}
        elevation={0}
      >
        <IconButton aria-label="open drawer" onClick={handleOpen} edge="start">
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Paper>
      <ListMenu open={open} />
    </Drawer>
  );
};

export default Menu;
