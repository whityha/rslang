import { FC, useEffect, useState } from 'react';
import {
  Grid, Pagination, Stack, useMediaQuery, useTheme,
} from '@mui/material';
import WordCard from '../word-card/word-card';
import { Word, Words } from '../../types/word';
import Loading from '../loading/loading';
import { useWordListContext } from '../../context/word-list-context';
import { getWordGroup } from '../../inc/api';

const WordList: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const context = useWordListContext();
  const [words, setWords] = useState<Words>([]);

  if (!context) return null;
  const { activeBook } = context;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getWordGroup(activeBook, 2);
      setWords(data);
    };

    fetchData();
  }, [activeBook]);

  if (!words) return <Loading />;

  const data = words.sort((a, b) => a.word.localeCompare(b.word));

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <Grid container spacing={3}>
        {data.map((word: Word) => (
          <WordCard key={word.id} {...word} />
        ))}
      </Grid>
      <Stack spacing={2} sx={{ pt: matches ? 5 : 3, alignSelf: 'center' }}>
        <Pagination size={matches ? 'large' : 'medium'} count={5} variant="outlined" color="primary" />
      </Stack>
    </div>
  );
};

export default WordList;
