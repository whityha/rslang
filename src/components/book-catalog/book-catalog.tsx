import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper, Typography } from '@mui/material';
import bookCatalogData from './book-catalog-data';
import BookCatalogButton from './book-catalog-button';
import BookCatalogIconButton from './book-catalog-icon-button';
import { useWordListContext } from '../../context/word-list-context';
import getBookColor from '../../utils/get-book-color';

const BookCatalog: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const context = useWordListContext();

  if (!context) return null;
  const { activeBook } = context;

  return (
    <Paper
      sx={{
        position: matches ? 'sticky' : 'fixed',
        top: matches ? 30 : 65,
        right: matches ? 'auto' : 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0.5,
        bgcolor: 'transparent',
      }}
      elevation={0}
    >
      {matches && (
        <Typography
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
            color: getBookColor(activeBook),
          }}
        >
          Книги
        </Typography>
      )}
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
