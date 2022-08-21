import { FC, useState, useEffect } from 'react';
import { Button, ButtonGroup, Grid } from '@mui/material';
import WordCard from '../word-card/word-card';
import { Word } from '../../types/word';
import { useAppDispatch, useWords } from '../../redux/hooks';
import getAllWords from '../../redux/words/getall';
import { setWordsLoading } from '../../redux/words/slice';
import Loading from '../loading/loading';

const WordList: FC = () => {
  const [currentTracks, setCurrentTracks] = useState<NodeListOf<HTMLAudioElement> | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<string>('');
  const [showTranslation, setShowTranslation] = useState(true);
  const dispatch = useAppDispatch();
  const words = useWords();

  useEffect(() => {
    dispatch(getAllWords());
  }, [dispatch]);

  return (
    <>
      <ButtonGroup
        sx={{ mb: 5 }}
        variant="outlined"
        aria-label="outlined button group"
      >
        <Button onClick={() => dispatch(getAllWords())}>reload</Button>
        <Button onClick={() => dispatch(setWordsLoading(true))}>
          setLoading
        </Button>
        <Button onClick={() => dispatch(setWordsLoading(false))}>
          set No Loading
        </Button>
        <Button onClick={() => setShowTranslation(!showTranslation)}>
          {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
        </Button>
      </ButtonGroup>
      <Grid container spacing={3}>
        {words.isLoading ? (
          <Loading />
        ) : (
          words.data.map((word: Word) => (
            <WordCard
              key={word.id}
              {...word}
              currentTracks={currentTracks}
              setCurrentTracks={setCurrentTracks}
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              showTranslation={showTranslation}
            />
          ))
        )}
      </Grid>
    </>
  );
};

export default WordList;
