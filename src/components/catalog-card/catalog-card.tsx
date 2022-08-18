import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Button, Grid, Paper, Typography,
} from '@mui/material';
import image from '../../assets/images/card-bg.png';

interface CardProps {
  title: string;
  description: string;
  path: string;
}

const CatalogCard: FC<CardProps> = ({ title, description, path }) => (
  <Grid item xs={12} md={6}>
    <Paper
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        textAlign: 'center',
      }}
    >
      <Link to={path}>
        <Box sx={{ px: 5, py: 7 }}>
          <Typography
            component="span"
            sx={{
              display: 'block',
              mb: 2,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ mb: 3 }}>{description}</Typography>
          <Button variant="outlined">Играть</Button>
        </Box>
      </Link>
    </Paper>
  </Grid>
);

export default CatalogCard;
