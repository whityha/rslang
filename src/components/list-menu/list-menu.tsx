import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAppDispatch, useAuth } from '../../redux/hooks';
import buttonsData from './buttons-data';
import { logout } from '../../redux/auth/slice';

interface ListMenuProps {
  open: boolean;
}

const ListMenu: FC<ListMenuProps> = ({ open }: ListMenuProps) => {
  const dispatch = useAppDispatch();
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
        id, text, icon, path,
      }) => (
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
      ))}
      {auth.isAuth && (
      <ListItem sx={{ display: 'block', mt: 'auto', p: 0 }}>
        <Link to="reg">
          <ListItemButton
            sx={{
              minHeight: 48,
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={iconStyle}
            >
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => dispatch(logout())}
              primary="Log out"
              sx={{ opacity: open ? 1 : 0, color: 'primary.contrastText' }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
      )}
    </List>
  );
};

export default ListMenu;
