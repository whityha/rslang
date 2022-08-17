import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DomainIcon from '@mui/icons-material/Domain';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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
    path: 'textbook',
  },
  {
    id: 3,
    text: 'Game',
    icon: <SportsEsportsOutlinedIcon />,
    path: 'games',
  },
  {
    id: 4,
    text: 'Statistic',
    icon: <QueryStatsIcon />,
    path: 'stat',
  },
];

interface ListMenuProps {
  open: boolean;
}

const ListMenu: FC<ListMenuProps> = ({ open }: ListMenuProps) => (
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
);

export default ListMenu;
