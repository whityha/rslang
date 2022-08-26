import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { CatalogItem } from '../../types/catalog-item';
import CategoryMenuButton from './category-menu-button';

interface CategoryMenuProps {
  data: CatalogItem[];
  title: string;
  active: CatalogItem;
  setActive: (value: CatalogItem) => void;
}

const CategoryMenu: FC<CategoryMenuProps> = ({
  data, title, active, setActive,
}) => (
  <Box sx={{ pb: 3 }}>
    <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      {data.map((item) => (
        <CategoryMenuButton
          key={item.id}
          data={item}
          active={active}
          setActive={setActive}
        />
      ))}
    </Box>
  </Box>
);

export default CategoryMenu;
