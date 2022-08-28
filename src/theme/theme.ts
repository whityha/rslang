import { createTheme } from '@mui/material/styles';
import {
  pink,
  purple,
  deepPurple,
  indigo,
  lightBlue,
  cyan,
  teal,
  blueGrey,
} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    // primary: {
    //   light: '#005b96',
    //   main: '#03396c',
    //   dark: '#011f4b',
    //   contrastText: '#b3cde0',
    // },
    text: {
      primary: '#444f5a',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export const basicColors = {
  grey: blueGrey[50],
  pink: pink[400],
  purple: purple[400],
  deepPurple: deepPurple[400],
  indigo: indigo[400],
  lightBlue: lightBlue[600],
  cyan: cyan[700],
  teal: teal[700],
  lightTextColor: '#ffffff',
};

export default theme;
