import { FC, useEffect } from 'react';
import { Button, ButtonGroup, Grid } from '@mui/material';
import WordCard from '../word-card/word-card';
import { Word } from '../../types/word';
import { useAppDispatch, useWords } from '../../redux/hooks';
import getAllWords from '../../redux/words/getall';
import { setWordsLoading } from '../../redux/words/slice';
import Loading from '../loading/loading';

const WordList: FC = () => {
  const dispatch = useAppDispatch();
  const words = useWords();

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  return (
    <div style={{ position: 'relative' }}>
      <ButtonGroup
        sx={{ mb: 3 }}
        variant="outlined"
        size="small"
        aria-label="small button group"
      >
        <Button onClick={() => dispatch(getAllWords())}>reload</Button>
        <Button onClick={() => dispatch(setWordsLoading(true))}>
          setLoading
        </Button>
        <Button onClick={() => dispatch(setWordsLoading(false))}>
          set No Loading
        </Button>
      </ButtonGroup>
      <Grid container spacing={3}>
        {words.isLoading ? (
          <Loading />
        ) : (
          words.data.map((word: Word) => (
            <WordCard key={word.id} {...word} />
          ))
        )}
      </Grid>
    </div>
  );
};

export default WordList;
