import {
  Box, Card, CardContent, CardMedia, List, ListItem, ListItemText, Typography,
} from '@mui/material';

type TGameStatisticCard = {
    imageLink: string;
    name: string;
    // TO DO NEW PROPERTIES
}
const GameStatisticCard = ({ name, imageLink }: TGameStatisticCard) => (
  <Card sx={{
    display: 'flex',
    width: { xs: '100%', sm: '50%' },
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
          <ListItem disablePadding>
            <ListItemText>
              <Typography variant="body1">0 слов</Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              <Typography variant="body1">0 прогресс</Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText>
              <Typography variant="body1">0 подряд</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </CardContent>
  </Card>
);

export default GameStatisticCard;
