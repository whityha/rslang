import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const buttonsData = [
  {
    id: 1,
    text: 'Главная',
    icon: <HomeOutlinedIcon />,
    path: '/',
  },
  {
    id: 2,
    text: 'Учебник',
    icon: <LocalLibraryOutlinedIcon />,
    path: 'textbook',
  },
  {
    id: 3,
    text: 'Игры',
    icon: <CategoryOutlinedIcon />,
    path: 'games',
  },
  {
    id: 4,
    text: 'Статистика',
    icon: <QueryStatsIcon />,
    path: 'stat',
  },
];

export default buttonsData;
