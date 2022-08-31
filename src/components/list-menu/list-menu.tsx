import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { useAuth } from '../../redux/hooks';
import buttonsData from './buttons-data';

interface ListMenuProps {
  open: boolean;
}

const ListMenu: FC<ListMenuProps> = ({ open }: ListMenuProps) => {
  const auth = useAuth();

  const iconStyle = {
    minWidth: 0,
    mr: open ? 3 : 'auto',
    justifyContent: 'center',
    color: 'primary.contrastText',
  };

  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    }}
    >
      {buttonsData.map(({
        id, text, icon, path, onlyAuth,
      }) => (
        (!onlyAuth || auth.isAuth) && (
        <ListItem disablePadding sx={{ display: 'block' }} key={id}>
          <NavLink className={({ isActive }) => (isActive ? 'active-menu-link' : undefined)} to={path}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={iconStyle}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: 'primary.contrastText' }} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        )
      ))}
    </List>
  );
};

export default ListMenu;
