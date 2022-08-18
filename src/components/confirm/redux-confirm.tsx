import { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Button, DialogActions, DialogTitle,
} from '@mui/material';
import { useAppDispatch, useConfirm } from '../../redux/hooks';
import { setConfirm, setDecline } from '../../redux/confirm/slice';

const ReduxConfirm: FC = () => {
  const dispatch = useAppDispatch();
  const confirm = useConfirm();

  const doCancel = () => {
    dispatch(setDecline());
  };

  const doConfirm = () => {
    dispatch(setConfirm());
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={confirm.visible ?? false}
    >
      {confirm.title ? <DialogTitle>{confirm.title}</DialogTitle> : ''}
      <DialogActions>
        <Button onClick={doCancel}>Отмена</Button>
        <Button onClick={doConfirm}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReduxConfirm;
