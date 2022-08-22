import { FC } from 'react';
import { Grid } from '@mui/material';
import WordList from '../word-list/word-list';
import BookCatalog from '../book-catalog/book-catalog';

const TextBook: FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={11}>
      <WordList />
    </Grid>
    <Grid item xs={1}>
      <BookCatalog />
    </Grid>
  </Grid>
);

export default TextBook;
