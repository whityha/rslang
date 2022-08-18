import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
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
    text: 'Каталог',
    icon: <CategoryOutlinedIcon />,
    path: 'catalog',
  },
  {
    id: 4,
    text: 'Игры',
    icon: <SportsEsportsOutlinedIcon />,
    path: 'games',
  },
  {
    id: 5,
    text: 'Статистика',
    icon: <QueryStatsIcon />,
    path: 'stat',
  },
];

export default buttonsData;
