import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { CatalogItem } from '../../types/catalog-item';

const bookCatalogData: CatalogItem[] = [
  {
    id: 0,
    title: '1',
    color: '#ec407a',
    icon: '',
    link: false,
  },
  {
    id: 1,
    title: '2',
    color: '#ab47bc',
    icon: '',
    link: false,
  },
  {
    id: 2,
    title: '3',
    color: '#7e57c2',
    icon: '',
    link: false,
  },
  {
    id: 3,
    title: '4',
    color: '#5c6bc0',
    icon: '',
    link: false,
  },
  {
    id: 4,
    title: '5',
    color: '#039be5',
    icon: '',
    link: false,
  },
  {
    id: 5,
    title: '6',
    color: '#0097a7',
    icon: '',
    link: false,
  },
  {
    id: 6,
    title: '',
    color: '#00796b',
    icon: <SchoolOutlinedIcon />,
    link: true,
  },
];

export default bookCatalogData;
