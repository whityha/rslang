import { FC } from 'react';
import { useWordListContext } from '../../context/word-list-context';
import { useAuth } from '../../redux/hooks';
import WordCard from '../word-card/word-card';
import WordListContainer from '../word-list-container/word-list-container';

const DifficultWords: FC = () => {
  const context = useWordListContext();
  const auth = useAuth();

  if (!context) return null;
  const { difficultWords } = context;

  return (
    auth.isAuth
      ? (
        <WordListContainer>
          {
          difficultWords && (difficultWords.length === 0)
            ? (<div>Вы еще не добавляли слов в этот раздел</div>)
            : difficultWords && difficultWords.map((word) => (
              <WordCard key={word.id} {...word} />
            ))
}
        </WordListContainer>
      ) : <div>Для доступа к этому разделу необходимо авторизоваться</div>

  );
};

export default DifficultWords;
