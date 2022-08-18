import React, { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Button, DialogActions, DialogContent, DialogTitle,
} from '@mui/material';

export interface Props {
  open?: boolean;
  title?: string;
  children?: string | React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
}

const defaultProps: Partial<Props> = {
  open: false,
  title: '',
  children: '',
};

const Confirm: FC<Props> = ({
  open, title, children, onCancel, onConfirm,
}) => {
  const doCancel = () => {
    onCancel();
  };

  const doConfirm = () => {
    onConfirm();
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open ?? false}
    >
      {title ? <DialogTitle>{title}</DialogTitle> : ''}
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={doCancel}>
          Отмена
        </Button>
        <Button onClick={doConfirm}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

Confirm.defaultProps = defaultProps;

export default Confirm;
