import { FC } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import OurTeam from '../components/out-team/our-team';
import theme from '../theme/theme';

const TeamPage: FC = () => {
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Typography component="h1" variant={matchesSM ? 'h3' : 'h4'} pb={3} pl={2}>Над проектом работали:</Typography>
      <OurTeam />
    </>
  );
};

export default TeamPage;
