import { FC } from 'react';
// import bookCatalogData from '../book-catalog/book-catalog-data';
import LevelSelectorButton from './level-selector-button';

type Props = {
  onLevelSelect: (level: number) => void;
}

const LevelSelector: FC<Props> = ({ onLevelSelect }) => {
  const bookCatalogData = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <h2>Выберите уровень сложности</h2>
      {
    bookCatalogData.slice(0, 6).map((book) => (
      <LevelSelectorButton level={book} key={book} onClick={() => onLevelSelect(book - 1)} />
    ))
  }
    </>
  );
};
export default LevelSelector;
