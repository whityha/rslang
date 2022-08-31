import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from '../../theme/theme';

const CrosscheckInfo = () => {
  const mediaMD = useMediaQuery(theme.breakpoints.up('md'));
  return (
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
        А так же в данном приложении реализованны следующие функции:

      </Typography>
    </Box>
  );
};

export default CrosscheckInfo;
