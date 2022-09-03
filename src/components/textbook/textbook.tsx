import { FC } from 'react';
import { Box } from '@mui/material';
import WordList from '../word-list/word-list';
import BookCatalog from '../book-catalog/book-catalog';
import GameCatalog from '../game-catalog/game-catalog';
import { useWords } from '../../redux/hooks';

const TextBook: FC = () => {
  const words = useWords();
  return (
    <Box sx={{ position: 'relative' }}>
      <BookCatalog />
      {words.allHard || <GameCatalog />}
      <WordList />
    </Box>
  );
};

export default TextBook;
