import { List, ListItem, Typography } from '@mui/material';
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

const CrossCheckBlock = ({ data }: {data: TCrossCheckData}) => (
  <List sx={{
    width: '45%',
    marginTop: '2em',
  }}
  >
    <Typography variant="h5" component="p" fontWeight={700}>{data.title}</Typography>
    {data.listItems.map((description) => <ListItemBlock description={description} />)}
  </List>
);

export default CrossCheckBlock;
