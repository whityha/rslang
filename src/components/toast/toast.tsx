import { Alert, AlertColor, Snackbar } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useToast } from '../../redux/hooks';
import { toastClear } from '../../redux/toast/slice';

export const Toast: FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('error');
  const toast = useToast();
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(toastClear());
    setOpen(false);
  };

  useEffect(() => {
    if (toast.visible) {
      setOpen(true);
      setMessage(toast.message);
      setSeverity(toast.color);
    }
  }, [toast]);

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
