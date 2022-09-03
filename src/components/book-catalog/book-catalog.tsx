import { FC } from 'react';
import CategoryMenu from '../category-menu/category-menu';
import bookCatalogData from './book-catalog-data';

const BookCatalog: FC = () => (
  <CategoryMenu
    data={bookCatalogData}
    title="Разделы учебника"
  />
);

export default BookCatalog;
