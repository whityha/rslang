import {
  Box, Typography, useMediaQuery,
} from '@mui/material';
import theme from '../../theme/theme';
import CrossCheckBlock from './cross-check-block';
import './cross-check-info.sass';
import { crossCheckData } from './constants';

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
      <Box sx={{
        display: 'flex',
        columnGap: '10%',
        flexWrap: 'wrap',
      }}
      >
        {crossCheckData.map((item) => <CrossCheckBlock data={item} />)}
      </Box>
    </Box>
  );
};

export default CrosscheckInfo;
