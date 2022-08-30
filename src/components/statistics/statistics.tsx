import {
  Box,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getStat } from '../../inc/api';
import { StatOptional } from '../game-common/save-game-stat';
import ChartNewWords from './chart-new-word';
import ChartProgress from './chart-progress';
import GeneralStatistics from './statistics-block';

const Statistics = () => {
  const [stat, setStat] = useState<StatOptional>({});

  useEffect(() => {
    getStat().then((data) => setStat(data.optional));
  }, []);

  return (
    <>
      <Box>
        {Object.keys(stat).length === 0 ? (<Typography variant="h4" mb={5}>Статистики еще нет, сыграйте в игры</Typography>)
          : (
            <>
              {Object.keys(stat).map((day) => (
                <GeneralStatistics day={day} stat={stat[day]} />
              ))}
            </>
          )}
      </Box>
      <ChartNewWords />
      <ChartProgress />
    </>
  );
};

export default Statistics;
