import { FC } from 'react';
import { useAppDispatch, useWords } from '../../redux/hooks';
import { setWordsLoading } from '../../redux/words/slice';

const TextBook: FC = () => {
  const dispatch = useAppDispatch();
  const words = useWords();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(setWordsLoading(true))}>setLoading</button>
        <button onClick={() => dispatch(setWordsLoading(false))}>set No Loading</button>
      </div>
      <h1>Textbook</h1>
      {
        words.isLoading ? 'Loading...' : words.data.map((word) => (
          <div>
            <div>{word.id}</div>
            <div>{word.word}</div>
            <div>{word.transcription}</div>
            <div>{word.wordTranslate}</div>
          </div>
        ))
      }

    </div>
  );
};

export default TextBook;
