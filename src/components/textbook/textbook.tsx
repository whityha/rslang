import { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAppDispatch, useWords } from '../../redux/hooks';
import getAllWords from '../../redux/words/getall';
import { setWordsLoading } from '../../redux/words/slice';
import Loading from '../loading/loading';
import WordCard from '../word-card/word-card';

const TextBook: FC = () => {
  const dispatch = useAppDispatch();
  const words = useWords();

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  return (
    <>
      <div>
        <button onClick={() => dispatch(getAllWords())}>reload</button>
        <button onClick={() => dispatch(setWordsLoading(true))}>setLoading</button>
        <button onClick={() => dispatch(setWordsLoading(false))}>set No Loading</button>
      </div>
      <h1>Textbook</h1>
      <Grid container spacing={2}>
        {
          words.isLoading
            ? <Loading />
            : words.data.map((word) => <WordCard key={word.id} {...word} />)
        }
      </Grid>
    </>
  );
};

export default TextBook;
