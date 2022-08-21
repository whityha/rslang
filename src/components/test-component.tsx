import { FC } from 'react';
import api, { getUserWords } from '../inc/api';
import { getBackendURL } from '../inc/conf';

const TestComponent: FC = () => {
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
      Server:
      {' '}
      {getBackendURL()}
      <br />
      <button onClick={() => oneWord()}>Get one word (console)</button>
      {' '}
      <button onClick={() => uWord()}>Get User Words (console)</button>
    </div>
  );
};

export default TestComponent;
