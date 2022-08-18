import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { toastInfo } from '../../redux/toast/slice';

import TestComponent from '../forms/test-component';
import OurTeam from '../out-team/our-team';

const Main: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toastInfo('Привет ребята, это пример вызова Toast. Вместо info может быть warning, error, succss.'));
  }, []);

  return (
    <>
      <h1>Main Page</h1>
      <TestComponent head="Test Component" />
      <OurTeam />
    </>
  );
};
export default Main;
