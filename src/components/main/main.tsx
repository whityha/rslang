import {
  Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography,
} from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../theme/theme';
import Cards from './constants';

const COLOR_MAIN = theme.palette.secondary.main;
const COLOR_SECOND = theme.palette.secondary.dark;

const Main: FC = () => {
  const navigate = useNavigate();
  const clickHandler = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      <Stack spacing="5em" direction="row" justifyContent="space-between">
        <Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              minWidth: '431px',
            }}
          >
            RS Lang

          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 'regular',
              opacity: 0.6,
            }}
          >
            Приложение для изучения английского языка

          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 'light',
            }}
          >
            Курсовой проект финального задания в рамках курса

          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 'bold',
            }}
          >
            «JavaScript/Front-end. Stage 2 / 2022Q2»

          </Typography>
        </Box>
      </Stack>
      <Button
        variant="contained"
        sx={{
          padding: '1.5em 2.5em',
          borderRadius: '100px',
          marginTop: '4em',
          backgroundColor: COLOR_MAIN,
          '&:hover': {
            backgroundColor: COLOR_SECOND,
          },
        }}
      >
        <Typography>Зарегистрироваться</Typography>
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={10}
      >
        <Typography
          variant="h4"
          component="p"
          sx={{
            maxWidth: '50%',
            textAlign: 'center',
          }}
        >
          В нашем приложении вы сможете воспользоваться следующими преимуществами:

        </Typography>
        <Stack direction="row" spacing={5} pt={7}>
          {Cards.map(({
            title, description, icon, path,
          }) => (
            <Card
              key={title}
              sx={{
                borderRadius: '25px',
                width: '33%',
                color: theme.palette.getContrastText(COLOR_MAIN),
                backgroundColor: COLOR_MAIN,
                '&:hover': {
                  backgroundColor: COLOR_SECOND,
                },
              }}
            >
              <CardActionArea
                sx={{
                  display: 'flex',
                  height: '100%',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
                onClick={() => clickHandler(path)}
              >
                <CardContent sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
                >
                  <CardMedia>
                    {icon}
                  </CardMedia>
                  <Typography
                    variant="h5"
                    mb={3}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    textAlign="center"
                    fontWeight="light"
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}

        </Stack>
      </Box>
      <Box mt={15}>
        <Typography variant="h5" component="p" textAlign="center" mb={4}>Наша видеопрезентация проекта:</Typography>
        <Box sx={{
          width: '400px',
          height: '400px',
          margin: '0em auto',
          backgroundColor: theme.palette.grey[400],
        }}
        >
          Заглушечка

        </Box>
      </Box>
    </Box>
  );
};
export default Main;
