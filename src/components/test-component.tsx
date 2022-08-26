import { FC } from 'react';
/* import {
  Diff, getHardWords, getSavedWords, getUserWords, setUserWord,
} from '../inc/api';
import { getBackendURL } from '../inc/conf';

const TestComponent: FC = () => {
  async function uWord() {
    getUserWords().then((res) => console.log(res.status, res.data));
  }

  async function testFunc() {
    await setUserWord('5e9f5ee35eb9e72bc21af4a1', Diff.UNSET, {
      good: 2,
      bad: 3,
    });
    getUserWords().then((res) => console.log(res.status, res.data));
  }

  async function hardWords() {
    getHardWords().then((res) => console.log(res));
  }

  async function savedWords() {
    getSavedWords().then((res) => console.log(res));
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
      <button onClick={() => hardWords()}>Hard Words</button>
      <button onClick={() => savedWords()}>Saved Words</button>

    </div>
  );
}; */

const TestComponent: FC = () => (<> </>);

export default TestComponent;
