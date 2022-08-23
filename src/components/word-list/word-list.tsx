import { FC, useEffect } from 'react';
import {
  Grid, Pagination, Stack, useMediaQuery, useTheme,
} from '@mui/material';
import WordCard from '../word-card/word-card';
import { Word } from '../../types/word';
import { useAppDispatch, useWords } from '../../redux/hooks';
import getAllWords from '../../redux/words/getall';
import Loading from '../loading/loading';

const WordList: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useAppDispatch();
  const words = useWords();

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <Stack
        spacing={2}
        sx={{
          pt: matches ? 0 : 3,
          pb: matches ? 5 : 3,
          alignSelf: 'center',
        }}
      >
        <Pagination size={matches ? 'large' : 'medium'} count={5} variant="outlined" color="primary" />
      </Stack>
      <Grid container spacing={3}>
        {words.isLoading ? (
          <Loading />
        ) : (
          words.data.map((word: Word) => (
            <WordCard key={word.id} {...word} />
          ))
        )}
      </Grid>
      <Stack spacing={2} sx={{ pt: matches ? 5 : 3, alignSelf: 'center' }}>
        <Pagination size={matches ? 'large' : 'medium'} count={5} variant="outlined" color="primary" />
      </Stack>
    </div>
  );
};

export default WordList;
