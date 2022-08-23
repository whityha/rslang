import { FC, useState } from 'react';
import {
  Button,
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ModalForm from './modal-form';
import styles from './button-styles';

const RegBlock: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ModalForm visible={modalVisible} setVisible={setModalVisible} title="Регистрация" regMode />
      <Button
        sx={styles}
        onClick={() => setModalVisible(true)}
        startIcon={<AccountCircleOutlinedIcon />}
      >
        Регистрация
      </Button>
    </>
  );
};

export default RegBlock;
