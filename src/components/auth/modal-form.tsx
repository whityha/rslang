import {
  Button,
  Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField,
} from '@mui/material';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type ModalProps = {
  title: string;
  visible: boolean;
  setVisible: Function;
  regMode: boolean;
}

interface IFormInputs {
  name: string;
  email: string;
  password: string;

}

/*
    // dispatch(testAuth());
    // dispatch(toastSuccess('Вход выполнен успешно!'));
*/

const ModalForm: FC<ModalProps> = ({
  title,
  visible,
  setVisible,
  regMode,
}) => {
  const handleClose = () => {
    setVisible(false);
  };

  const { handleSubmit, control } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

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
              defaultValue=""
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
          <Button variant="contained" type="submit">{title}</Button>
        </DialogActions>
      </form>

    </Dialog>
  );
};

export default ModalForm;
