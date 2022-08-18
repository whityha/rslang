import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#005b96',
      main: '#03396c',
      dark: '#011f4b',
      contrastText: '#b3cde0',
    },
    text: {
      primary: '#444f5a',
    },
  },
});

export default theme;
