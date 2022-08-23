import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';
import WordList from '../word-list/word-list';
import BookCatalog from '../book-catalog/book-catalog';

const TextBook: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid
      container
      spacing={2}
      sx={{
        position: 'relative',
      }}
    >
      <Grid item xs={matches ? 11 : 12}>
        <WordList />
      </Grid>
      <Grid item xs={matches ? 1 : 12}>
        <BookCatalog />
      </Grid>
    </Grid>
  );
};

export default TextBook;
