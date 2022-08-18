import { FC } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import RSSChool from '../assets/rs_school_js.svg';

const Footer: FC = () => (
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
      size="small"
      color="inherit"
      sx={{
        height: '50%',
      }}
    >
      <Button href="https://github.com/memos77">Ihar Halavin</Button>
      <Button href="https://github.com/whityha">Pavel Khapaliuk</Button>
      <Button href="https://github.com/unclekoin">Pavel Koryakin</Button>
    </ButtonGroup>
    <Box component="span">©2022</Box>
  </Box>
);

export default Footer;
