import { Button } from '@mui/material';
import { FC } from 'react';
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

  return (
    <>
      {' '}
      {auth.isAuth
        ? (
          <>
            <Button>
              Login:
              {auth.userData!.name}
            </Button>
            <Button onClick={() => doLogout()}> Выход </Button>
          </>
        )
        : <Button onClick={() => showAuthForm()}>Тестовый вход</Button>}
    </>
  );
};

export default AuthBlock;
