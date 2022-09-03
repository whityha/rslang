import { FC, useEffect } from 'react';
import WordCard from '../word-card/word-card';
import Loading from '../loading/loading';
import { useWordListContext } from '../../context/word-list-context';
import WordListPagination from '../pagination/pagination';
import WordListContainer from '../word-list-container/word-list-container';
import { useAppDispatch, useWords } from '../../redux/hooks';
import getAllWords from '../../redux/words/getall';

const WordList: FC = () => {
  const context = useWordListContext();
  const words = useWords();
  const dispatch = useAppDispatch();

  if (!context) return null;
  const { activeBook, page } = words;

  useEffect(() => {
    dispatch(getAllWords({ group: activeBook, page }));
  }, [activeBook, page, dispatch]);

  if (words.isLoading) return <Loading />;

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <WordListPagination />
      <WordListContainer>
        {words.data.map((word) => (
          <WordCard key={word.id} {...word} />
        ))}
      </WordListContainer>
      <WordListPagination />
    </div>
  );
};

export default WordList;
