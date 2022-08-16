import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean) => void;
}

const Header: FC<HeaderProps> = ({ setOpen }: HeaderProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Paper sx={{ minHeight: 70, px: 2.5, display: 'flex' }} elevation={0}>
      {!matches
        && (
        <Button onClick={() => setOpen(true)} sx={{ borderRadius: '50%' }}>
          <MenuIcon />
        </Button>
        )}
    </Paper>
  );
};

export default Header;
