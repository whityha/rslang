import { FC, ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';

interface WordListContainerProps {
  children: ReactNode;
}

const WordListContainer: FC<WordListContainerProps> = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Grid
      container
      spacing={3}
      sx={{
        pt: matches ? 5 : 3,
        pb: matches ? 8 : 5,
      }}
    >
      {children}
    </Grid>
  );
};

export default WordListContainer;
