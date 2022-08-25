import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { CatalogItem } from '../../types/catalog-item';
import { basicColors } from '../../theme/theme';

const { pink, purple } = basicColors;

const gameCatalogData: CatalogItem[] = [
  {
    id: 0,
    title: 'Спринт',
    subtitle: '',
    symbol: <SmartToyOutlinedIcon />,
    color: pink,
    path: '/games/sprint',
  },
  {
    id: 6,
    title: 'Вызов',
    subtitle: '',
    symbol: <CasinoOutlinedIcon />,
    color: purple,
    path: '/games/call',
  },
];

export default gameCatalogData;
