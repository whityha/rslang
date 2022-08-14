import { FC, useEffect } from 'react';
import { useAppDispatch, useWords } from '../../redux/hooks';
import getAllWords from '../../redux/words/getall';
import { setWordsLoading } from '../../redux/words/slice';

const TextBook: FC = () => {
  const dispatch = useAppDispatch();
  const words = useWords();

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(getAllWords())}>reload</button>
        <button onClick={() => dispatch(setWordsLoading(true))}>setLoading</button>
        <button onClick={() => dispatch(setWordsLoading(false))}>set No Loading</button>
      </div>
      <h1>Textbook</h1>
      {
        words.isLoading ? 'Loading...' : words.data.map((word) => (
          <div key={word.id}>
            <div>{word.word}</div>
            <div>{word.transcription}</div>
            <div>{word.wordTranslate}</div>
            <div>{word.textMeaningTranslate}</div>
            <hr />
          </div>
        ))
      }

    </div>
  );
};

export default TextBook;
