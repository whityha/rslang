import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const GeneralStatistics = ({ title }: {title: string}) => {
  const value = 50;
  const cardStyles = {
    display: 'flex',
    width: { xs: '100%', sm: '50%' },
  };
  const cardImageStyle = {
    height: 'auto',
    minWidth: '150px',
    width: '40%',
    padding: '1em',
    borderRadius: '20px',
  };

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
            <Card sx={cardStyles}>
              <CardMedia
                component="img"
                image="https://interessno.ru/wp-content/uploads/2021/02/apr60-zbkh0-1.webp"
                sx={cardImageStyle}
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
                  <Typography variant="h5" component="p">Savannah</Typography>
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
            <Card sx={cardStyles}>
              <CardMedia
                component="img"
                image="https://marathonec.ru/wp-content/uploads/2020/04/dlitelny-beg.jpg"
                sx={cardImageStyle}
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
                  <Typography variant="h5" component="p">Sprint</Typography>
                  <List disablePadding>
                    <ListItem disablePadding>
                      <ListItemText>
                        <Typography variant="body1">0 words</Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText>
                        <Typography variant="body1">0 accurancy</Typography>
                      </ListItemText>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText>
                        <Typography variant="body1">0 in a row</Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeneralStatistics;
