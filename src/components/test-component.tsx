import { FC } from 'react';
import { Diff, getUserWords, setUserWord } from '../inc/api';
import { getBackendURL } from '../inc/conf';

const TestComponent: FC = () => {
  async function uWord() {
    getUserWords().then((res) => console.log(res.status, res.data));
  }

  async function testFunc() {
    await setUserWord('5e9f5ee35eb9e72bc21af953', Diff.STUDIED);
    getUserWords().then((res) => console.log(res.status, res.data));
  }

  return (
    <div>
      Server:
      {' '}
      {getBackendURL()}
      <br />
      <div>Вывод от кнопок в консоли смотрите:</div>
      {' '}
      <button onClick={() => uWord()}>Get User Words</button>
      <button onClick={() => testFunc()}>testFunc</button>

    </div>
  );
};

export default TestComponent;
