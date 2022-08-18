import { Button } from '@mui/material';
import { FC } from 'react';
import { logout, testAuth } from '../redux/auth/slice';
import { useAppDispatch, useAuth } from '../redux/hooks';
import { toastSuccess } from '../redux/toast/slice';

const AuthBlock: FC = () => {
  const auth = useAuth();
  const dispatch = useAppDispatch();

  const showAuthForm = () => {
    dispatch(testAuth());
    dispatch(toastSuccess('Success login!'));
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
            <Button onClick={() => dispatch(logout())}> Logout </Button>
          </>
        )
        : <Button onClick={() => showAuthForm()}>Do Login</Button>}
    </>
  );
};

export default AuthBlock;
