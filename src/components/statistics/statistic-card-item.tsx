import { ListItem, ListItemText, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  value: string | number | undefined;
}

const StatisticCardItem: FC<Props> = ({ title, value }) => {
  if (value === undefined) return (<> </>);
  return (
    <ListItem disablePadding>
      <ListItemText>
        <Typography variant="body1">
          {title}
          {': '}
          {value}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default StatisticCardItem;
