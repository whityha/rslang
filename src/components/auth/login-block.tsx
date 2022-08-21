import { FC, useEffect, useState } from 'react';
import {
  Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ModalForm from './modal-form';
import styles from './button-styles';
import { useAppDispatch, useAuth } from '../../redux/hooks';
import { setLoginRequired } from '../../redux/auth/slice';

const LoginBlock: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const auth = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth.isLoginRequired) {
      dispatch(setLoginRequired(false));
      setModalVisible(true);
    }
  }, [auth.isLoginRequired]);

  return (
    <>
      <ModalForm visible={modalVisible} setVisible={setModalVisible} title="Вход" regMode={false} />
      <Button
        sx={styles}
        onClick={() => setModalVisible(true)}
        startIcon={<LockOutlinedIcon />}
      >
        Вход
      </Button>
    </>
  );
};

export default LoginBlock;
