import { Button } from '@mui/material';
import { FC } from 'react';
import { logout, testAuth } from '../redux/auth/slice';
import askConfirm from '../redux/confirm/ask-confirm';
import { useAppDispatch, useAuth } from '../redux/hooks';
import { toastSuccess } from '../redux/toast/slice';

const AuthBlock: FC = () => {
  const auth = useAuth();
  const dispatch = useAppDispatch();

  const showAuthForm = () => {
    dispatch(testAuth());
    dispatch(toastSuccess('Success login!'));
  };

  const doLogout = async () => {
    const res = await dispatch(askConfirm('Are you sure?'));
    if (res.payload) dispatch(logout());
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
