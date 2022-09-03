import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import { basicColors } from '../../theme/theme';
import { CatalogItem } from '../../types/catalog-item';
import { setGamePrepared } from '../../redux/words/slice';
import { useAppDispatch, useWords } from '../../redux/hooks';
import bookCatalogData from '../book-catalog/book-catalog-data';
import getAllWords from '../../redux/words/getall';

interface CategoryMenuButtonProps {
  data: CatalogItem;
}

const CategoryMenuButton: FC<CategoryMenuButtonProps> = ({
  data,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const words = useWords();

  const clickHandler = () => {
    if (data.path) {
      dispatch(setGamePrepared(true));
      navigate(data.path);
    } else {
      dispatch(getAllWords({ page: 0, group: data.id }));
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
          bgcolor: data.color ? data.color : bookCatalogData[words.activeBook].color,
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
          bgcolor: data.id === words.activeBook && data.color ? data.color : '#cccccc',
        }}
      />
    </Paper>
  );
};

export default CategoryMenuButton;
