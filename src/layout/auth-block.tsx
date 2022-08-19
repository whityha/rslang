import { Button } from '@mui/material';
import { FC } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { logout, testAuth } from '../redux/auth/slice';
import useAsk from '../redux/confirm/use-ask';
import { useAppDispatch, useAuth } from '../redux/hooks';
import { toastSuccess } from '../redux/toast/slice';

const AuthBlock: FC = () => {
  const auth = useAuth();
  const ask = useAsk();
  const dispatch = useAppDispatch();

  const showAuthForm = () => {
    dispatch(testAuth());
    dispatch(toastSuccess('Вход выполнен успешно!'));
  };

  const doLogout = async () => {
    const r = await ask('Вы действительно хотите выйти из аккаунта?');
    if (r) dispatch(logout());
  };

  const styles = {
    color: 'text.primary',
    textTransform: 'capitalize',
    '&:hover': {
      color: 'text.primary',
    },
  };

  return (
    <>
      {' '}
      {auth.isAuth
        ? (
          <>
            <Button sx={styles}>
              Login:
              {auth.userData!.name}
            </Button>
            <Button
              onClick={() => doLogout()}
              sx={styles}
              startIcon={<LockOpenOutlinedIcon />}
            >
              Выйти
            </Button>
          </>
        )
        : (
          <Button
            onClick={() => showAuthForm()}
            sx={styles}
            startIcon={<LockOutlinedIcon />}
          >
            Войти
          </Button>
        )}
    </>
  );
};

export default AuthBlock;
