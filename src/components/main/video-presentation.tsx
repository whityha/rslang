import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from '../../theme/theme';
import './video-presentation.sass';

const VidePresentation = () => {
  const mediaMD = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box style={{ display: 'none' }} mt={15}>
      <Typography variant="h5" component="p" textAlign="center" mb={4}>Наша видеопрезентация проекта:</Typography>
      <Box display="flex" justifyContent="center">
        <iframe width={mediaMD ? '50%' : '80%'} height="300" src="https://www.youtube.com/embed/v4rvTMBCJD0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Box>
    </Box>
  );
};

export default VidePresentation;
