import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AuthBlock from './auth-block';

const getTitle = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Главная';
    case '/textbook':
      return 'Учебник';
    case '/games':
      return 'Игры';
    case '/games/sprint':
      return ' Спринт';
    case '/games/call':
      return 'Вызов';
    case '/stat':
      return 'Статистика';
    case '/reg':
      return 'Регистрация';
    default:
      return '';
  }
};

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean) => void;
}

const Header: FC<HeaderProps> = ({ setOpen }: HeaderProps) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ height: 70, bgcolor: '#ffffff' }}>
        {!matches && (
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
            }}
          >
            <MenuIcon sx={{ color: 'text.primary' }} />
          </IconButton>
        )}
        <Typography variant="h5" component="h1" sx={{ flexGrow: 1, color: 'text.primary' }}>
          {getTitle(pathname)}
        </Typography>
        <AuthBlock />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
