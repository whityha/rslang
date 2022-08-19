import { Button } from '@mui/material';
import { FC } from 'react';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { logout, testAuth } from '../../redux/auth/slice';
import useAsk from '../../redux/confirm/use-ask';
import { useAppDispatch, useAuth } from '../../redux/hooks';

import LoginBlock from './login-block';
import styles from './button-styles';
import RegBlock from './reg-block';
import { toastSuccess } from '../../redux/toast/slice';

const AuthBlock: FC = () => {
  const auth = useAuth();
  const ask = useAsk();
  const dispatch = useAppDispatch();

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
          <>
            <RegBlock />
            <LoginBlock />
            <Button onClick={() => {
              dispatch(testAuth());
              dispatch(toastSuccess('Вход выполнен успешно!'));
            }}
            >
              Тестовый вход

            </Button>

          </>
        )}
    </>
  );
};

export default AuthBlock;
