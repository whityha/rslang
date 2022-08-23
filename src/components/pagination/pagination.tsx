import { FC, ChangeEvent } from 'react';
import {
  Pagination, Stack, useMediaQuery, useTheme,
} from '@mui/material';
import { useWordListContext } from '../../context/word-list-context';

const WordListPagination: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const context = useWordListContext();

  if (!context) return null;
  const { setPage } = context;

  const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };
  return (
    <Stack spacing={2} sx={{ alignSelf: 'center' }}>
      <Pagination
        onChange={handleChange}
        size={matches ? 'large' : 'medium'}
        count={30}
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
};

export default WordListPagination;
