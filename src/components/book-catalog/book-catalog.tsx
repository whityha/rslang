import { FC } from 'react';
import { Fab, Paper, Typography } from '@mui/material';
import { useWordListContext } from '../../context/word-list-context';
import bookCatalogData from './book-catalog-data';

const BookCatalog: FC = () => {
  const context = useWordListContext();

  if (!context) return null;
  const { activeBook, setActiveBook } = context;
  return (
    <Paper
      sx={{
        position: 'sticky',
        top: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
      elevation={0}
    >
      <Typography sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Книги</Typography>
      {bookCatalogData.map(({ id, title, color }) => (
        <Fab
          onClick={() => setActiveBook(id)}
          key={id}
          size={activeBook === id ? 'large' : 'medium'}
          sx={{
            color: '#ffffff',
            fontSize: activeBook === id ? 24 : 16,
            fontWeight: activeBook === id ? 700 : 500,
            bgcolor: color,
            '&:hover': {
              bgcolor: color,
              opacity: 0.8,
            },
          }}
        >
          {title}
        </Fab>
      ))}
    </Paper>
  );
};

export default BookCatalog;
