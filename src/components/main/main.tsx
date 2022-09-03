import {
  Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography, useMediaQuery,
} from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWordListContext } from '../../context/word-list-context';
import theme from '../../theme/theme';
import Cards from './constants';
import CrosscheckInfo from './cross-check-info';
import VidePresentation from './video-presentation';

const Main: FC = () => {
  const navigate = useNavigate();
  const mediaMD = useMediaQuery(theme.breakpoints.up('md'));
  const context = useWordListContext();

  if (!context) return null;
  const { activeBook } = context;
  const clickHandler = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      <Stack
        spacing="5em"
        direction={mediaMD ? 'row' : 'column'}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          textAlign: 'center',
        }}
      >
        <Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              minWidth: mediaMD ? '431px' : 'auto',
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
            «JavaScript/Front-end. Stage 2 / 2022Q1»

          </Typography>
        </Box>
      </Stack>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={10}
      >
        <Typography
          variant={mediaMD ? 'h4' : 'h5'}
          component="p"
          sx={{
            maxWidth: mediaMD ? '50%' : 'auto',
            textAlign: 'center',
          }}
        >
          Вы сможете воспользоваться следующими преимуществами данного приложения:

        </Typography>
        <Stack direction={mediaMD ? 'row' : 'column'} spacing={5} pt={7}>
          {Cards.map(({
            title, description, icon, path,
          }) => (
            <Card
              key={title}
              sx={{
                borderRadius: '25px',
                width: mediaMD ? '33%' : '250px',
                color: theme.palette.getContrastText(activeBook.color),
                background: activeBook.color,
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
      <CrosscheckInfo />
      <VidePresentation />
    </Box>
  );
};
export default Main;
