import { FC, useEffect, useState } from 'react';
import {
  Button, ButtonGroup, Grid, Paper,
} from '@mui/material';
import { useAppDispatch, useWords } from '../../redux/hooks';
import getAllWords from '../../redux/words/getall';
import { setWordsLoading } from '../../redux/words/slice';
import Loading from '../loading/loading';
import WordList from '../word-list/word-list';

const TextBook: FC = () => {
  const [showTranslation, setShowTranslation] = useState(true);
  const dispatch = useAppDispatch();
  const words = useWords();

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  return (
    <>
      <ButtonGroup sx={{ mb: 3 }} variant="outlined" aria-label="outlined button group">
        <Button onClick={() => dispatch(getAllWords())}>reload</Button>
        <Button onClick={() => dispatch(setWordsLoading(true))}>setLoading</Button>
        <Button onClick={() => dispatch(setWordsLoading(false))}>
          set No Loading
        </Button>
        <Button onClick={() => setShowTranslation(!showTranslation)}>
          {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
        </Button>
      </ButtonGroup>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          {
          words.isLoading
            ? <Loading />
            : <WordList words={words.data} showTranslation={showTranslation} />
        }
        </Grid>
        <Grid item xs={2}>
          <Paper
            sx={{
              position: 'sticky',
              top: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
            elevation={0}
          >
            <Button variant="outlined" sx={{ boxShadow: 1 }}>Книга 1</Button>
            <Button variant="outlined" sx={{ boxShadow: 1 }}>Книга 2</Button>
            <Button variant="outlined" sx={{ boxShadow: 1 }}>Книга 3</Button>
            <Button variant="outlined" sx={{ boxShadow: 1 }}>Книга 4</Button>
            <Button variant="outlined" sx={{ boxShadow: 1 }}>Книга 5</Button>
            <Button variant="outlined" sx={{ boxShadow: 1 }}>Книга 6</Button>
            <Button variant="outlined" sx={{ boxShadow: 1 }}>Сложные</Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default TextBook;
