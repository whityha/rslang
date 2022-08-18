import DomainIcon from '@mui/icons-material/Domain';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const buttonsData = [
  {
    id: 1,
    text: 'Main',
    icon: <DomainIcon />,
    path: '/',
  },
  {
    id: 2,
    text: 'Textbook',
    icon: <BookOutlinedIcon />,
    path: 'textbook',
  },
  {
    id: 3,
    text: 'Game',
    icon: <SportsEsportsOutlinedIcon />,
    path: 'games',
  },
  {
    id: 4,
    text: 'Statistic',
    icon: <QueryStatsIcon />,
    path: 'stat',
  },
];

export default buttonsData;
