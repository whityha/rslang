import { FC, useEffect, useState } from 'react';
import { AggWords, getHardWords } from '../../inc/api';

const DifficultWords: FC = () => {
  const [words, setWords] = useState<AggWords>([]);
  useEffect(() => {
    getHardWords().then((res) => setWords(res.paginatedResults));
  }, []);
  return (
    <>
      {
      words.map((word) => (
        <p>
          {word.word}
          {' '}
          -
          {' '}
          <small>{JSON.stringify(word)}</small>
        </p>
      ))
    }
    </>
  );
};

export default DifficultWords;
