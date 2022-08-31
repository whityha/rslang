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
    onlyAuth: false,
    icon: <HomeOutlinedIcon />,
    path: '/',
  },
  {
    id: 2,
    text: 'Список слов',
    onlyAuth: false,
    icon: <ReceiptLongOutlinedIcon />,
    path: 'dictionary',
  },
  {
    id: 3,
    text: 'Учебник',
    onlyAuth: false,
    icon: <LocalLibraryOutlinedIcon />,
    path: 'textbook',
  },
  {
    id: 4,
    text: 'Сложные слова',
    onlyAuth: true,
    icon: <SchoolOutlinedIcon />,
    path: 'difficult-words',
  },
  {
    id: 5,
    text: 'Игры',
    onlyAuth: false,
    icon: <CategoryOutlinedIcon />,
    path: 'games',
  },
  {
    id: 6,
    text: 'Наша команда',
    onlyAuth: false,
    icon: <GroupsOutlinedIcon />,
    path: 'team',
  },
  {
    id: 7,
    text: 'Статистика',
    onlyAuth: true,
    icon: <QueryStatsIcon />,
    path: 'stat',
  },
];

export default buttonsData;
