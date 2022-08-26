import { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconStyles } from './icon-group';
import LightTooltip from '../light-tooltip.tsx/light-tooltip';
import StatisticTable from './statistic-table';

interface StatisticGroupProps {
  word: string;
  styles: IconStyles;
  color: string;
}

const StatisticGroup: FC<StatisticGroupProps> = ({ styles, color, word }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <LightTooltip title="Статистика">
        <IconButton onClick={handleClickOpen}>
          <InsertChartIcon sx={{ ...styles, color }} />
        </IconButton>
      </LightTooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{word}</DialogTitle>
        <DialogContent>
          <StatisticTable />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StatisticGroup;
