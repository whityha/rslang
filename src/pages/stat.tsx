import { Stack } from '@mui/material';
import { FC } from 'react';
import GeneralStatistics from '../components/statistics.tsx/statistics-block';
import { useAuth } from '../redux/hooks';

const StatPage: FC = () => {
  const auth = useAuth();
  if (auth.isAuth) {
    return (
      <Stack
        spacing={10}
        sx={{
          display: 'flex',
          minHeight: '100%',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <GeneralStatistics title="Сегодня" />
        <GeneralStatistics title="За всё время" />
      </Stack>
    );
  }
  return <GeneralStatistics title="Ты не вошёл, но сегодня что то клацал" />;
};
export default StatPage;
