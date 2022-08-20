import { FC } from 'react';
import { getFilesRoot } from '../inc/conf';

const TestComponent: FC = () => {
  const url = getFilesRoot();
  const yourResourceFromData = 'files/01_0002.jpg';
  const img = `${url}${yourResourceFromData}`;

  return (
    <div>
      Пример картинки с сервера:
      <br />
      <img width="220" src={img} alt={`Не загрузилась картинка по адресу: ${img}`} />
    </div>
  );
};

export default TestComponent;
