import { FC } from 'react';
import { Typography } from '@mui/material';
import DifficultWords from '../components/difficult-words/difficult-words';

const DifficultWordsPages: FC = () => (
  <>
    <Typography component="h1" variant="h5">Сложные слова</Typography>
    <DifficultWords />
  </>
);

export default DifficultWordsPages;
