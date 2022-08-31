import { Box, Typography } from '@mui/material';
import theme from '../../theme/theme';

const VidePresentation = () => (
  <Box mt={15}>
    <Typography variant="h5" component="p" textAlign="center" mb={4}>Наша видеопрезентация проекта:</Typography>
    <Box sx={{
      width: '200px',
      height: '200px',
      margin: '0em auto',
      backgroundColor: theme.palette.grey[400],
    }}
    >
      Заглушечка

    </Box>
  </Box>
);

export default VidePresentation;
