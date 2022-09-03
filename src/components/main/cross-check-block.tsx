import {
  List, ListItem, Typography, useMediaQuery,
} from '@mui/material';
import theme from '../../theme/theme';
import { TCrossCheckData } from './constants';

const ListItemBlock = ({ description }: { description: string }) => (
  <ListItem
    className="func-list-item"
    sx={{
      textAlign: 'justify',
    }}
  >
    {description}
  </ListItem>
);

const CrossCheckBlock = ({ data }: {data: TCrossCheckData}) => {
  const mediaSM = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <List sx={{
      width: mediaSM ? '45%' : '100%',
      marginTop: '2em',
    }}
    >
      <Typography variant="h5" component="p" fontWeight={700} mb={1}>{data.title}</Typography>
      {data.listItems.map((description) => <ListItemBlock description={description} />)}
    </List>
  );
};

export default CrossCheckBlock;
