import { FC } from 'react';
import {
  Box, Button, ButtonGroup, Typography, useMediaQuery,
} from '@mui/material';
import RSSChool from '../assets/rs_school_js.svg';
import theme from '../theme/theme';

const Footer: FC = () => {
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        padding: '0px 5% 0px 5%',
      }}
      className="footer"
    >
      <Box component="a" href="https://rs.school/js/" width="100px">
        <img alt="RSSchool" src={RSSChool} />
      </Box>
      <ButtonGroup
        variant="text"
        color="inherit"
        orientation={matchesSM ? 'horizontal' : 'vertical'}
        sx={{
          height: { sm: '50%' },
        }}
      >
        <Button href="https://github.com/memos77">
          <Typography variant="body2" textAlign="center" fontSize={matchesSM ? 'inherit' : '.7rem'}>
            Ihar Halavin
          </Typography>
        </Button>
        <Button href="https://github.com/whityha">
          <Typography variant="body2" textAlign="center" fontSize={matchesSM ? 'inherit' : '.7rem'}>
            Pavel Khapaliuk
          </Typography>
        </Button>
        <Button href="https://github.com/unclekoin">
          <Typography variant="body2" textAlign="center" fontSize={matchesSM ? 'inherit' : '.7rem'}>
            Pavel Koryakin
          </Typography>
        </Button>
      </ButtonGroup>
      <Box component="span">©2022</Box>
    </Box>
  );
};

export default Footer;
