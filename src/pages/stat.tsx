import { Stack } from '@mui/material';
import { FC } from 'react';
import GeneralStatistics from '../components/statistics/statistics';
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
        <GeneralStatistics />
      </Stack>
    );
  }
  return <div>Для просмотра статистики нужно авторизоваться</div>;
};
export default StatPage;
