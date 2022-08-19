import { FC, useState } from 'react';
import {
  Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ModalForm from './modal-form';
import styles from './button-styles';

const LoginBlock: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
