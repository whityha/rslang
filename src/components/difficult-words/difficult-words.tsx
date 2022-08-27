import { FC } from 'react';
import { useWordListContext } from '../../context/word-list-context';
import WordCard from '../word-card/word-card';
import WordListContainer from '../word-list-container/word-list-container';

const DifficultWords: FC = () => {
  const context = useWordListContext();

  if (!context) return null;
  const { difficultWords } = context;

  return (
    <WordListContainer>
      {difficultWords && difficultWords.map((word) => (
        <WordCard key={word.id} {...word} />
      ))}
    </WordListContainer>
  );
};

export default DifficultWords;
