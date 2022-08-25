import { FC } from 'react';
import { getFilesRoot } from '../../inc/conf';
import usePlay from '../../inc/use-play';
import { Word } from '../../types/word';

type Props = {
  word: Word
}

const GameResultsItem: FC<Props> = ({ word }) => {
  const [play] = usePlay();

  return (
    <div className="res-window__item">
      <div>
        <button onClick={() => play(getFilesRoot() + word.audio)}>🔊</button>
        <strong>{word.word}</strong>
        <span className="gray">
          {' '}
          —
          {' '}
          {word.wordTranslate}
        </span>
      </div>
    </div>
  );
};

export default GameResultsItem;
