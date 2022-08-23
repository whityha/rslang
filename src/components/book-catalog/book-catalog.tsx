import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Fab, Paper, Typography } from '@mui/material';
import { useWordListContext } from '../../context/word-list-context';
import bookCatalogData from './book-catalog-data';

const BookCatalog: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const context = useWordListContext();

  if (!context) return null;
  const { activeBook, setActiveBook } = context;
  return (
    <Paper
      sx={{
        position: matches ? 'sticky' : 'fixed',
        top: matches ? 30 : 75,
        left: matches ? 'initial' : '50%',
        transform: matches ? 'initial' : 'translateX(-50%)',
        display: 'flex',
        flexDirection: matches ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        bgcolor: 'transparent',
      }}
      elevation={0}
    >
      { matches && <Typography sx={{ fontWeight: 700, textTransform: 'uppercase' }}>Книги</Typography>}
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
