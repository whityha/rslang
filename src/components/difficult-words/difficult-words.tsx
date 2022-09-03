import { FC, useEffect } from 'react';
import { Diff } from '../../inc/api';
import { useAppDispatch, useAuth, useWords } from '../../redux/hooks';
import getAllWords from '../../redux/words/getall';
import Loading from '../loading/loading';
import WordCard from '../word-card/word-card';
import WordListContainer from '../word-list-container/word-list-container';

const DifficultWords: FC = () => {
  // const context = useWordListContext();
  const auth = useAuth();
  // const [difficultWords, setDifficultWords] = useState<Words>([]);
  const words = useWords();
  const dispatch = useAppDispatch();

  useEffect(() => {
    /*
    const fetchData = async () => {
      if (auth.isAuth) {
        const response = await getHardWords();
        const data = response.paginatedResults.map((item) => transformData(item));
        setDifficultWords(data);
      } else {
        setDifficultWords([]);
      }
    };
    fetchData();
    */
    dispatch(getAllWords({ diff: Diff.HARD }));
  }, [auth.isAuth]);

  if (words.isLoading) return <Loading />;

  return (
    auth.isAuth
      ? (
        <WordListContainer>
          {
         (words.data.length === 0)
           ? (<div>Вы еще не добавляли слов в этот раздел</div>)
           : words.data.map((word) => (
             <WordCard key={word.id} {...word} />
           ))
}
        </WordListContainer>
      ) : <div>Для доступа к этому разделу необходимо авторизоваться</div>

  );
};

export default DifficultWords;
