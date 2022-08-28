import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

const style = {
  fontSize: '4em',
  margin: '0em 0em 0.4em 0em',
};

const Cards = [
  {
    icon: <QueryStatsSharpIcon sx={style} />,
    title: 'Статистика',
    description: 'Для каждого пользователя ведется отдельная статистика прогресса изучения слов',
    path: '/stat',
  },
  {
    icon: <CasinoOutlinedIcon sx={style} />,
    title: 'Игры',
    description: 'Изучайте слова с помощью игр. Совмещайте приятное с полезным!',
    path: '/games',
  },
  {
    icon: <AutoStoriesOutlinedIcon sx={style} />,
    title: 'Словарь',
    description: 'Более 3500 слов с примерами употребления, переводом, транскрипцией и произношением',
    path: '/dictionary',
  },
];

export default Cards;
