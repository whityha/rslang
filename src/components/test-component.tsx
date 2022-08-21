import { FC } from 'react';
import api, { getUserWords } from '../inc/api';

const TestComponent: FC = () => {
  // http://185.26.98.232:8089/users/6300bf2a92cce124a4a0a2d5/words/
  async function uWord() {
    getUserWords().then((res) => console.log(res.status, res.data));
  }

  async function oneWord() {
    try {
      const res = await api('GET', '/words/5e9f5ee35eb9e72bc21af4b1');
      console.log(res.status, res.data);
    } catch (error) {
      // No action
    }
  }

  return (
    <div>
      <button onClick={() => oneWord()}>Get one word in console</button>
      {' '}
      <button onClick={() => uWord()}>Get User Words in console</button>
    </div>
  );
};

export default TestComponent;
