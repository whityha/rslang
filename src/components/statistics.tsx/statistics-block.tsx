import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';
import GameStatisticCard from './statistic-game';

const GeneralStatistics = ({ title }: {title: string}) => {
  const value = 50;
  const savannahImage = 'https://naked-science.ru/wp-content/uploads/2022/04/1440_SS_savanna_feat-1030x580-1.jpg';
  const sprintImage = 'https://lalafemme.ca/wp-content/uploads/2016/10/run.jpg';
  return (
    <Box>
      <Typography variant="h4" mb={5}>{title}</Typography>
      <Grid
        container
        spacing={2}
      >
        <Grid xs={12} xl={4} item>
          <Card sx={{
            height: '100%',
          }}
          >
            <CardContent sx={{
              padding: '1em',
              display: 'flex',
              height: '100%',
              justifyContent: 'space-around',
              columnGap: '20px',
              alignItems: 'center',
            }}
            >

              <Box sx={{
                position: 'relative',
              }}
              >
                <Box sx={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '50%',
                  transform: 'translate(-50%, +40%)',
                }}
                >
                  <Typography
                    variant="h6"
                    width="50px"
                    textAlign="center"
                  >
                    {value}
                    %
                  </Typography>
                </Box>
                <CircularProgress color="success" size="100px" variant="determinate" value={value} thickness={5} />
              </Box>

              <Typography variant="body2">Сегодня мы выучили 10 слов</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} xl={8} item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              columnGap: '1rem',
              rowGap: '1rem',
            }}
          >
            <GameStatisticCard name="Savannah" imageLink={savannahImage} />
            <GameStatisticCard name="Sprint" imageLink={sprintImage} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeneralStatistics;
