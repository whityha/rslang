import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DomainIcon from '@mui/icons-material/Domain';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Paper } from '@mui/material';

const drawerWidth = 240;
const buttonsData = [
  {
    id: 1,
    text: 'Main',
    icon: <DomainIcon />,
    path: '/',
  },
  {
    id: 2,
    text: 'Textbook',
    icon: <BookOutlinedIcon />,
    path: 'vocabulary',
  },
  {
    id: 3,
    text: 'Game',
    icon: <SportsEsportsOutlinedIcon />,
    path: 'login',
  },
  {
    id: 4,
    text: 'Statistic',
    icon: <QueryStatsIcon />,
    path: 'stat',
  },
];

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Drawer sx={{ '& .MuiDrawer-paper': { borderWidth: 0 } }} variant="permanent" open={open}>
      <Paper
        sx={{
          minHeight: 70,
          minWidth: 0,
          mr: open ? 3 : 'auto',
          display: 'flex',
          justifyContent: open ? 'initial' : 'center',
          alignItems: 'center',
          px: 3,
        }}
        elevation={0}
      >
        <IconButton aria-label="open drawer" onClick={handleOpen} edge="start">
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Paper>
      <List sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
      >
        {buttonsData.map(({
          id, text, icon, path,
        }) => (
          <ListItem disablePadding sx={{ display: 'block' }} key={id}>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to={path}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
        <ListItem sx={{ display: 'block', mt: 'auto', p: 0 }}>
          <Link to="reg">
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
