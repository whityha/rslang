import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const getTitle = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Main';
    case '/textbook':
      return 'Textbook';
    case '/games':
      return 'Games';
    case '/stat':
      return 'Statistic';
    case '/reg':
      return 'Registration';
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
  const matches = useMediaQuery(theme.breakpoints.up('md'));

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
        <Button
          sx={{
            color: 'text.primary',
            '&:hover': {
              color: 'text.primary',
              bgcolor: '#ffffff',
            },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
