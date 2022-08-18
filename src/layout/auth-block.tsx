import { Button } from '@mui/material';
import { FC } from 'react';
import { testAuth } from '../redux/auth/slice';
import useConfirm from '../redux/confirm/manage';
import { useAppDispatch, useAuth } from '../redux/hooks';
import { toastSuccess } from '../redux/toast/slice';

const AuthBlock: FC = () => {
  const auth = useAuth();
  const dispatch = useAppDispatch();
  const confirm = useConfirm();

  const showAuthForm = () => {
    dispatch(testAuth());
    dispatch(toastSuccess('Success login!'));
  };

  const doLogout = async () => {
    const res = await confirm.showConfirm('Sueree!!!?');
    console.log('conf', res);
    // if (res === false) dispatch(logout());
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
