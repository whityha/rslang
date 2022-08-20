import {
  Button,
  Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField,
} from '@mui/material';
import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import regUser from '../../redux/auth/reg';
import { resetAuthSuccess } from '../../redux/auth/slice';
import { useAppDispatch, useAuth } from '../../redux/hooks';
import { UserAuthDTO } from '../../types/user';
import Loading from '../loading/loading';

type ModalProps = {
  title: string;
  visible: boolean;
  setVisible: Function;
  regMode: boolean;
}

const ModalForm: FC<ModalProps> = ({
  title,
  visible,
  setVisible,
  regMode,
}) => {
  const handleClose = () => {
    setVisible(false);
  };

  const { handleSubmit, control } = useForm<UserAuthDTO>();
  const auth = useAuth();
  const dispatch = useAppDispatch();

  const onSubmit = (userData: UserAuthDTO) => {
    dispatch(regUser(userData));
  };

  useEffect(() => {
    if (auth.isLastOperationSuccess) {
      dispatch(resetAuthSuccess());
      setVisible(false);
    }
  }, [auth.isLastOperationSuccess]);

  return (
    <Dialog open={visible} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={2}>
            {regMode && (
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <TextField fullWidth type="text" required label="Логин" {...field} />}
            />
            )}
            <Controller
              name="email"
              control={control}
              defaultValue={auth.userData.email!}
              rules={{ required: true }}
              render={({ field }) => <TextField fullWidth type="email" required label="E-mail" {...field} />}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <TextField fullWidth type="password" required label="Пароль" {...field} />}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button variant="text" onClick={handleClose}>Отмена</Button>
          {auth.isLoading ? <Loading />
            : <Button variant="contained" type="submit">{title}</Button>}
        </DialogActions>
      </form>

    </Dialog>
  );
};

export default ModalForm;
