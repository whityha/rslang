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
        position: 'relative',
        width: 220,
        height: 70,
        px: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
        bgcolor: basicColors.grey,
        cursor: 'pointer',
        overflow: 'hidden',
        '&:hover .book-color': {
          bgcolor: data.color ? data.color : active.color,
        },
      }}
    >
      <div>
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
      </div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 24,
          fontWeight: 700,
          color: basicColors.lightTextColor,
          borderRadius: '50%',
          zIndex: 100,
        }}
      >
        {data.symbol}
      </Box>
      <Box
        className="book-color"
        sx={{
          position: 'absolute',
          top: -10,
          right: -25,
          width: 110,
          height: 110,
          borderRadius: 53,
          transition: 'all 0.2s linear',
          bgcolor: data.id === active.id && data.color ? data.color : '#cccccc',
        }}
      />
    </Paper>
  );
};

export default CategoryMenuButton;
