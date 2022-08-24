import { FC } from 'react';
import bookCatalogData from '../book-catalog/book-catalog-data';
import LevelSelectorButton from './level-selector-button';

const LevelSelector: FC = () => {
  function onClick(level: number) {
    console.log(level);
  }

  return (
    <>
      {
    bookCatalogData.slice(0, 6).map((book) => (
      <LevelSelectorButton level={book.id} key={book.id} onClick={() => onClick(book.id)} />
    ))
  }
    </>
  );
};
export default LevelSelector;
