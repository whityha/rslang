import { FC } from 'react';
import api, { getUserWords } from '../inc/api';
import { getBackendURL } from '../inc/conf';
import { useAppDispatch, useWords } from '../redux/hooks';
import getAllWords from '../redux/words/getall';

const TestComponent: FC = () => {
  const words = useWords();
  const dispatch = useAppDispatch();

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
      <div>Вывод от кнопок в консоли смотрите:</div>
      <br />
      <button onClick={() => oneWord()}>Get one word</button>
      {' '}
      <button onClick={() => uWord()}>Get User Words</button>
      <hr />
      <h3>Words redux</h3>
      <button onClick={() => dispatch(getAllWords())}>Words. No params</button>
      <button onClick={() => dispatch(getAllWords({ page: 1 }))}>Words Page 1</button>
      <br />
      <button onClick={() => dispatch(getAllWords({ group: 2 }))}>Words Group 2</button>
      <button onClick={() => dispatch(getAllWords({ page: 0, group: 3 }))}>
        Words Group 3. Page 0
      </button>
      <div>
        {
          words.data.map((word) => (
            <span key={word.id}>
              {word.word}
&nbsp;
            </span>
          ))
        }

      </div>

    </div>
  );
};

export default TestComponent;
