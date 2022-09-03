import { FC, ChangeEvent } from 'react';
import {
  Pagination, Stack, useMediaQuery, useTheme,
} from '@mui/material';
import getAllWords from '../../redux/words/getall';
import { useAppDispatch, useWords } from '../../redux/hooks';

const WordListPagination: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const dispatch = useAppDispatch();
  const words = useWords();

  const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
    dispatch(getAllWords({ page: value - 1 }));
  };
  return (
    <Stack spacing={2} sx={{ alignSelf: 'center' }}>
      <Pagination
        onChange={handleChange}
        size={matches ? 'large' : 'medium'}
        count={30}
        variant="outlined"
        color="primary"
        page={words.page + 1}
      />
    </Stack>
  );
};

export default WordListPagination;
