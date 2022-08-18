import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import image from '../assets/images/404.png';

const NotFoundPage: FC = () => (
  <Paper
    sx={{
      display: 'grid',
      placeItems: 'center',
      height: 1,
      textAlign: 'center',
      py: 2,
    }}
    elevation={0}
    square
  >
    <div>
      <Box sx={{ mb: 3 }}>
        <img src={image} alt="page not found" />
      </Box>
      <Box>
        <Typography
          gutterBottom
          variant="h3"
          component="h1"
          sx={{ fontWeight: 700 }}
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: 24, mb: 5 }}
        >
          We couldn&apos;t find what you were looking for.
          <br />
          Maybe go back to the home page?
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
        >
          <Link to="/">Go Home</Link>
        </Button>
      </Box>
    </div>
  </Paper>
);
export default NotFoundPage;
