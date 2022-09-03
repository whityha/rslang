import {
  Box,

  Grid,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { StatItem } from '../game-common/save-game-stat';
import gamesCardData from '../games-card/games-card-data';
import GameStatisticCard from './statistic-game';

type Props = {
  day: string;
  stat: StatItem;
}

const getName = (name: string) => gamesCardData.find(({ path }) => path === name)?.title ?? 'Игра';

const GeneralStatistics: FC<Props> = ({ day, stat }) => (

  <Box>
    <br />
    <Typography variant="h6">
      Статистика за:
      {' '}
      {day}
    </Typography>

    <Grid container spacing={2}>
      <Grid item xl={4} md={6} xs={12}>
        <GameStatisticCard
          name="Всего по словам"
          imageLink="/img/words.jpg"
          newWords={stat.new}
          studiedWords={stat.good}
          percent={Math.round((stat.good / (stat.good + stat.bad)) * 100)}
        />
      </Grid>
      {
                      Object.keys(stat.games).map((game) => (
                        <Grid item xl={4} md={6} xs={12}>
                          <GameStatisticCard
                            name={getName(game)}
                            imageLink={`/img/${game}.jpg`}
                            newWords={stat.games[game].new}
                            maxSerie={stat.games[game].serie}
                            percent={Math.round((stat.good / (stat.good + stat.bad)) * 100)}
                          />

                        </Grid>
                      ))

          }
    </Grid>

  </Box>
);

export default GeneralStatistics;
