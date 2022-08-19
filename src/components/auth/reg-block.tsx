import { FC, useState } from 'react';
import {
  Button,
} from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
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
        startIcon={<PersonAddOutlinedIcon />}
      >
        Регистрация
      </Button>
    </>
  );
};

export default RegBlock;
