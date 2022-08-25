import { FC } from 'react';
import bookCatalogData from './book-catalog-data';
import { useWordListContext } from '../../context/word-list-context';
import ButtonMenu from '../button-menu/button-menu';
import ButtonCatalogContainer from './book-catalog-container';

const BookCatalog: FC = () => {
  const context = useWordListContext();

  if (!context) return null;
  const { activeBook, setActiveBook } = context;

  return (
    <ButtonCatalogContainer>
      <ButtonMenu
        data={bookCatalogData}
        active={activeBook}
        setActive={setActiveBook}
      />
    </ButtonCatalogContainer>
  );
};

export default BookCatalog;
