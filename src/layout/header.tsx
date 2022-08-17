import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper, Button, Typography } from '@mui/material';
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
    <Paper
      sx={{
        minHeight: 70,
        px: 2.5,
        display: 'flex',
        alignItems: 'center',
      }}
      component="header"
      elevation={0}
    >
      {!matches
        && (
        <Button onClick={() => setOpen(true)} sx={{ borderRadius: '50%' }}>
          <MenuIcon color="inherit" />
        </Button>
        )}
      <Typography variant="h1" sx={{ fontSize: 34, fontWeight: 400 }}>
        {getTitle(pathname)}
      </Typography>
    </Paper>
  );
};

export default Header;
