import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
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
    text: 'Список слов',
    icon: <ReceiptLongOutlinedIcon />,
    path: 'dictionary',
  },
  {
    id: 3,
    text: 'Учебник',
    icon: <LocalLibraryOutlinedIcon />,
    path: 'textbook',
  },
  {
    id: 4,
    text: 'Сложные слова',
    icon: <SchoolOutlinedIcon />,
    path: 'difficult-words',
  },
  {
    id: 5,
    text: 'Игры',
    icon: <CategoryOutlinedIcon />,
    path: 'games',
  },
  {
    id: 6,
    text: 'Наша команда',
    icon: <GroupsOutlinedIcon />,
    path: 'team',
  },
  {
    id: 7,
    text: 'Статистика',
    icon: <QueryStatsIcon />,
    path: 'stat',
  },
];

export default buttonsData;
