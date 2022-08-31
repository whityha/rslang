import { FC, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconStyles } from './icon-group';
import LightTooltip from '../light-tooltip.tsx/light-tooltip';
// import StatisticTable from './statistic-table';
import { getUserWord } from '../../inc/api';
import Loading from '../loading/loading';

interface StatisticGroupProps {
  word: string;
  styles: IconStyles;
  color: string;
  id: string;
}

const StatisticGroup: FC<StatisticGroupProps> = ({
  styles, color, word, id,
}) => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState('');
  const noInfo = 'Слово еще не участвовало в играх';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      getUserWord(id).then((res) => {
        // console.log(res.data);
        if (res.data.optional) {
          setInfo(`Угадано: ${res.data.optional.good};  Ошибок: ${res.data.optional.bad}`);
        } else setInfo(noInfo);
      }).catch(() => {
        setInfo(noInfo);
      });
    }
  }, [open]);

  return (
    <div>
      <LightTooltip title="Статистика">
        <IconButton onClick={handleClickOpen}>
          <InsertChartIcon sx={{ ...styles, color }} />
        </IconButton>
      </LightTooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {word}
        </DialogTitle>
        <DialogContent>
          {
            info.length ? info : <Loading />
          }

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StatisticGroup;
