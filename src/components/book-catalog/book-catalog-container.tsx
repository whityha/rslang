import { FC, ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';

interface ButtonCatalogContainerProps {
  children: ReactNode;
}

const ButtonCatalogContainer: FC<ButtonCatalogContainerProps> = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box sx={{
      position: 'absolute',
      top: matches ? -10 : -45,
      bottom: 0,
      left: 5,
    }}
    >
      { children }

    </Box>
  );
};

export default ButtonCatalogContainer;
