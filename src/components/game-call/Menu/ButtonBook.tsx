import { Button } from '@mui/material';

const ButtonBook = ({
  id, inner, current, changeCurrent,
}:
  {id: number, inner: string, current: number, changeCurrent: (num: number) => void}) => {
  const changeCurrentButton = () => {
    changeCurrent(id);
  };
  return (<Button onClick={changeCurrentButton} variant={current === id ? 'contained' : 'outlined'}>{inner}</Button>);
};

export default ButtonBook;
