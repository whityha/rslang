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
import AuthBlock from '../../components/auth/auth-block';
import SetupMenu from './setup-menu';
import getTitle from './get-title';

interface HeaderProps {
  setOpen: (value: boolean) => void;
}

const Header: FC<HeaderProps> = ({ setOpen }: HeaderProps) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  const paths = ['/textbook', '/dictionary'];

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{
        height: 70,
        bgcolor: '#ffffff',
        justifyContent: 'space-between',
      }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!matchesLG && (
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: matchesSM ? 2 : 0,
            }}
          >
            <MenuIcon sx={{ color: 'text.primary' }} />
          </IconButton>
          )}
          {matchesSM && (
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1, color: 'text.primary', mr: 1 }}>
            {getTitle(pathname)}
          </Typography>
          )}
          {paths.includes(pathname) && (
            <SetupMenu />
          )}
        </div>
        <AuthBlock />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
