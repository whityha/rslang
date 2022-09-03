import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { CatalogItem } from '../../types/catalog-item';
import { basicColors } from '../../theme/theme';

const {
  pink, purple, deepPurple, indigo, lightBlue, cyan, teal,
} = basicColors;

const bookCatalogData: CatalogItem[] = [
  {
    id: 0,
    title: 'Легко',
    subtitle: '1-600',
    symbol: 'A1',
    color: indigo,
    path: '',
  },
  {
    id: 1,
    title: 'Легко',
    subtitle: '601-1200',
    symbol: 'A2',
    color: purple,
    path: '',
  },
  {
    id: 2,
    title: 'Нормально',
    subtitle: '1201-1800',
    symbol: 'B1',
    color: deepPurple,
    path: '',
  },
  {
    id: 3,
    title: 'Нормально',
    subtitle: '1801-2400',
    symbol: 'B2',
    color: pink,
    path: '',
  },
  {
    id: 4,
    title: 'Сложно',
    subtitle: '2401-3000',
    symbol: 'B2',
    color: lightBlue,
    path: '',
  },
  {
    id: 5,
    title: 'Сложно',
    subtitle: '3001-3600',
    symbol: 'C1',
    color: cyan,
    path: '',
  },
  {
    id: 6,
    title: 'Сложные слова',
    subtitle: 'Слова, отмеченные пользователем сложными',
    symbol: <SchoolOutlinedIcon fontSize="large" />,
    color: teal,
    path: '/difficult-words',
    onlyAuth: true,
  },
];

export default bookCatalogData;
