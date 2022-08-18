import { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Button, DialogActions, DialogTitle,
} from '@mui/material';
import { useAppDispatch } from '../../redux/hooks';
import useConfirm from '../../redux/confirm/manage';

const ReduxConfirm: FC = () => {
  const dispatch = useAppDispatch();
  const confirm = useConfirm();

  const doCancel = () => {
    dispatch(confirm.decline());
  };

  const doConfirm = () => {
    dispatch(confirm.confirm());
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
