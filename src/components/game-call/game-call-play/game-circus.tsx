import { Box, CircularProgress, Typography } from '@mui/material';

const Circus = ({ value } : {value: number}) => {
  const minProgress = 30;
  const maxProgress = 75;

  const getColor = (valueAccurance: number): 'error' | 'warning' | 'success' => {
    if (valueAccurance <= minProgress) return 'error';
    if (valueAccurance > minProgress && valueAccurance < maxProgress) return 'warning';
    return 'success';
  };

  return (
    <Box sx={{
      position: 'relative',
    }}
    >
      <Typography
        variant="h6"
        sx={{
          position: 'absolute',
          top: 50,
          left: 50,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {value}
        %

      </Typography>
      <CircularProgress color={getColor(value)} variant="determinate" value={value} size="100px" />
    </Box>
  );
};

export default Circus;
