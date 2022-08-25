import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { basicColors } from '../../theme/theme';
import { CatalogItem } from '../../types/catalog-item';

interface CategoryMenuButtonProps {
  data: CatalogItem;
  active: CatalogItem;
  setActive: (value: CatalogItem) => void;
}

const CategoryMenuButton: FC<CategoryMenuButtonProps> = ({
  data,
  active,
  setActive,
}) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    if (data.path) {
      navigate(data.path);
    } else if (setActive) {
      setActive(data);
    }
  };

  return (
    <Paper
      onClick={clickHandler}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1,
        minWidth: 140,
        p: 0,
        bgcolor: basicColors.grey,
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      <Box
        component="span"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: 1,
          height: 1,
          py: 2,
          px: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {data.title}
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontStyle: 'italic',
          }}
        >
          {data.subtitle}
        </Typography>
      </Box>
      <Box
        component="span"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 0.5,
          height: 1,
          py: 2,
          px: 1,
          overflow: 'hidden',
          // TODO заменить серый цвет
          bgcolor: data.id === active.id ? data.color : '#cccccc',
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
            color: basicColors.lightTextColor,
          }}
        >
          {data.symbol}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CategoryMenuButton;
