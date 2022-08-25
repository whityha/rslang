import { FC } from 'react';
import { Box } from '@mui/material';
import WordList from '../word-list/word-list';
import BookCatalog from '../book-catalog/book-catalog';

const TextBook: FC = () => (
  <Box sx={{ position: 'relative' }}>
    <BookCatalog />
    <WordList />
  </Box>
);

export default TextBook;
