import { FC, ReactNode } from 'react';
import { Fab } from '@mui/material';
import { useWordListContext } from '../../context/word-list-context';
import fabStyles from './fab-styles';

interface BookCatalogButtonProps {
  children: ReactNode;
  bookId: number;
  color: string;
}

const BookCatalogButton: FC<BookCatalogButtonProps> = ({ children, bookId, color }) => {
  const context = useWordListContext();

  if (!context) return null;
  const { activeBook, setActiveBook } = context;

  return (
    <Fab
      onClick={() => setActiveBook(bookId)}
      size={activeBook === bookId ? 'large' : 'medium'}
      sx={fabStyles(activeBook, bookId, color)}
    >
      { children }
    </Fab>
  );
};

export default BookCatalogButton;
