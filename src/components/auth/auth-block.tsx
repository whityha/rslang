import { Button } from '@mui/material';
import { FC } from 'react';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { logout } from '../../redux/auth/slice';
import useAsk from '../../redux/confirm/use-ask';
import { useAppDispatch, useAuth } from '../../redux/hooks';

import LoginBlock from './login-block';
import styles from './button-styles';
import RegBlock from './reg-block';

const AuthBlock: FC = () => {
  const auth = useAuth();
  const ask = useAsk();
  const dispatch = useAppDispatch();

  const doLogout = async () => {
    const r = await ask('Вы действительно хотите выйти из аккаунта?');
    if (r) dispatch(logout());
  };

  return (
    <div>
      {' '}
      {auth.isAuth
        ? (
          <>
            <Button sx={styles}>
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
          </>
        )}
    </div>
  );
};

export default AuthBlock;
