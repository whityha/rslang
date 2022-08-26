import { FC, useEffect, useState } from 'react';
import WordCard from '../word-card/word-card';
import { Words } from '../../types/word';
import Loading from '../loading/loading';
import { useWordListContext } from '../../context/word-list-context';
import { getWordGroup } from '../../inc/api';
import WordListPagination from '../pagination/pagination';
import WordListContainer from '../word-list-container/word-list-container';

const WordList: FC = () => {
  const context = useWordListContext();
  const [words, setWords] = useState<Words>([]);

  if (!context) return null;
  const { activeBook, page } = context;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getWordGroup(activeBook.id, page);
      setWords(data);
    };

    fetchData();
  }, [activeBook, page]);

  if (!words.length) return <Loading />;

  const data = words.sort((a, b) => a.word.localeCompare(b.word));

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <WordListContainer>
        {data.map((word) => (
          <WordCard key={word.id} {...word} />
        ))}
      </WordListContainer>
      <WordListPagination />
    </div>
  );
};

export default WordList;
