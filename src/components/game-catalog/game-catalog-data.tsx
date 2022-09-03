import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { CatalogItem } from '../../types/catalog-item';

const gameCatalogData: CatalogItem[] = [
  {
    id: 0,
    title: 'Спринт',
    subtitle: '',
    symbol: <SmartToyOutlinedIcon fontSize="large" />,
    color: '',
    path: '/games/sprint',
  },
  {
    id: 2,
    title: 'Писатель',
    subtitle: '',
    symbol: <SmartToyOutlinedIcon fontSize="large" />,
    color: '',
    path: '/games/writer',
  },
  {
    id: 6,
    title: 'Вызов',
    subtitle: '',
    symbol: <CasinoOutlinedIcon fontSize="large" />,
    color: '',
    path: '/games/call',
  },
];

export default gameCatalogData;
