import { FC, useEffect, useState } from 'react';
import { Button, ButtonGroup, Grid } from '@mui/material';
import { useAppDispatch, useWords } from '../../redux/hooks';
import getAllWords from '../../redux/words/getall';
import { setWordsLoading } from '../../redux/words/slice';
import Loading from '../loading/loading';
import WordCard from '../word-card/word-card';

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
          {showTranslation ? 'Показать перевод' : 'Скрыть перевод'}
        </Button>
      </ButtonGroup>
      <Grid container spacing={2}>
        {
          words.isLoading
            ? <Loading />
            : words.data.map((word) => (
              <WordCard key={word.id} showTranslation={showTranslation} {...word} />
            ))
        }
      </Grid>
    </>
  );
};

export default TextBook;
