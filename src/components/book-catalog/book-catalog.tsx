import { FC } from 'react';
import { useWordListContext } from '../../context/word-list-context';
import CategoryMenu from '../category-menu/category-menu';
import bookCatalogData from './book-catalog-data';

const BookCatalog: FC = () => {
  const context = useWordListContext();

  if (!context) return null;
  const { activeBook, setActiveBook } = context;

  return (
    <CategoryMenu
      data={bookCatalogData}
      active={activeBook}
      setActive={setActiveBook}
      title="Разделы учебника"
    />
  );
};

export default BookCatalog;
