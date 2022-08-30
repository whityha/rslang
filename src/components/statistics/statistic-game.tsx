import {
  Box, Card, CardContent, CardMedia, List, Typography,
} from '@mui/material';
import StatisticCardItem from './statistic-card-item';

type TGameStatisticCard = {
    imageLink: string;
    name: string;
    newWords: number;
    percent: number;
    maxSerie?: number;
    studiedWords?: number;
}
const GameStatisticCard = ({
  name, imageLink, newWords, percent, maxSerie, studiedWords,
}: TGameStatisticCard) => (
  <Card sx={{
    display: 'flex',
    width: '100%',
  }}
  >
    <CardMedia
      component="img"
      image={imageLink}
      sx={{
        height: 'auto',
        minWidth: '150px',
        width: '40%',
        padding: '1em',
        borderRadius: '20px',
      }}
    />
    <CardContent sx={{
      padding: '1em',
    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <Typography variant="h6" component="p">{name}</Typography>
        <List disablePadding>
          <StatisticCardItem title="Новых" value={newWords} />
          <StatisticCardItem title="Изучено" value={studiedWords} />
          <StatisticCardItem title="Правильно" value={`${percent}%`} />
          <StatisticCardItem title="Подряд" value={maxSerie} />
        </List>
      </Box>
    </CardContent>
  </Card>
);

export default GameStatisticCard;
