import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper, Typography } from '@mui/material';
import bookCatalogData from './book-catalog-data';
import BookCatalogButton from './book-catalog-button';
import BookCatalogIconButton from './book-catalog-icon-button';

const BookCatalog: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

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
        title ? (
          <BookCatalogButton key={id} bookId={id} color={color}>
            {title}
          </BookCatalogButton>
        ) : <BookCatalogIconButton key={id} bookId={id} color={color} />
      ))}
    </Paper>
  );
};

export default BookCatalog;
