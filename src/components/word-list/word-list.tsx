import { FC, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';
import WordCard from '../word-card/word-card';
import { Word, Words } from '../../types/word';
import Loading from '../loading/loading';
import { useWordListContext } from '../../context/word-list-context';
import { getWordGroup } from '../../inc/api';
import WordListPagination from '../pagination/pagination';

const WordList: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const context = useWordListContext();
  const [words, setWords] = useState<Words>([]);

  if (!context) return null;
  const { activeBook, page } = context;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getWordGroup(activeBook.id, page);
      setWords(data);
    };

    fetchData();
  }, [activeBook, page]);

  if (!words) return <Loading />;

  const data = words.sort((a, b) => a.word.localeCompare(b.word));

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {matches && <WordListPagination />}
      <Grid
        container
        spacing={3}
        sx={{
          pt: matches ? 5 : 3,
          pb: matches ? 8 : 5,
        }}
      >
        {data.map((word: Word) => (
          <WordCard key={word.id} {...word} />
        ))}
      </Grid>
      <WordListPagination />
    </div>
  );
};

export default WordList;
