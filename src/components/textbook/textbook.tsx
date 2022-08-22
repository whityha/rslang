import { FC } from 'react';
import { Button, Grid, Paper } from '@mui/material';
import WordList from '../word-list/word-list';

const tmpData = [
  { id: 1, title: 'Книга 1' },
  { id: 2, title: 'Книга 2' },
  { id: 3, title: 'Книга 3' },
  { id: 4, title: 'Книга 4' },
  { id: 5, title: 'Книга 5' },
  { id: 6, title: 'Книга 6' },
  { id: 7, title: 'Учить' },
];

const TextBook: FC = () => (
  <Grid container spacing={3}>
    <Grid item md={10} xs={9}>
      <WordList />
    </Grid>
    <Grid item md={2} xs={3}>
      <Paper
        sx={{
          position: 'sticky',
          top: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          minWidth: 120,
        }}
        elevation={0}
      >
        {tmpData.map(({ id, title }) => (
          <Button key={id} variant="outlined" sx={{ boxShadow: 1 }}>
            {title}
          </Button>
        ))}
      </Paper>
    </Grid>
  </Grid>
);

export default TextBook;
