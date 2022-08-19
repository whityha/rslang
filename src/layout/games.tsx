import { FC } from 'react';
import { Grid } from '@mui/material';
import GamesCard from '../components/games-card/games-card';
import gamesCardData from '../components/games-card/games-card-data';

const Games: FC = () => (
  <Grid container spacing={3}>
    {gamesCardData.map((card) => <GamesCard key={card.id} {...card} />)}
  </Grid>
);

export default Games;
