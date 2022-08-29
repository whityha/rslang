import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getStat } from '../../inc/api';
import { StatOptional } from '../game-common/save-game-stat';
/// import GameStatisticCard from './statistic-game';

const Statistics = () => {
  // const savannahImage = 'https://naked-science.ru/wp-content/uploads/2022/04/1440_SS_savanna_feat-1030x580-1.jpg';
  // const sprintImage = 'https://lalafemme.ca/wp-content/uploads/2016/10/run.jpg';

  const [stat, setStat] = useState<StatOptional>({});

  useEffect(() => {
    getStat().then((data) => setStat(data.optional));
  }, []);

  return (
    <Box>
      {Object.keys(stat).length === 0 ? (<Typography variant="h4" mb={5}>Статистики еще нет, сыграйте в игры</Typography>)
        : (
          <Grid
            container
            spacing={2}
          >

            <Grid xs={12} xl={8} item>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  columnGap: '1rem',
                  rowGap: '1rem',
                }}
              >
                {Object.keys(stat).map((day) => (
                  <div>
                    <h2>{day}</h2>
                    <h3>По словам</h3>

                    <p>
                      количество новых слов за день:
                      {stat[day].new}
                    </p>
                    <p>
                      количество изученных слов за день:
                      {stat[day].good}
                    </p>
                    <p>
                      процент правильных ответов за день:
                      {Math.round((stat[day].good / (stat[day].good + stat[day].bad)) * 100)}
                      %
                    </p>

                    <h3>по каждой мини-игре отдельно:</h3>
                    {
                      Object.keys(stat[day].games).map((game) => (
                        <div>
                          <h4>{game}</h4>

                          <p>
                            количество новых слов за день:
                            {stat[day].games[game].new}
                          </p>
                          <p>
                            процент правильных ответов:

                            {Math.round((stat[day].games[game].good
                            / (stat[day].games[game].good + stat[day].games[game].bad)) * 100)}
                            %
                          </p>
                          <p>
                            самая длинная серия правильных ответов:
                            {' '}
                            {stat[day].games[game].serie}
                          </p>

                        </div>
                      ))
                    }

                    {JSON.stringify(stat[day])}
                  </div>
                ))}
              </Box>
            </Grid>
          </Grid>
        )}
    </Box>
  );
};

/*
            <GameStatisticCard name="Savannah" imageLink={savannahImage} />
            <GameStatisticCard name="Sprint" imageLink={sprintImage} />
            */
export default Statistics;
