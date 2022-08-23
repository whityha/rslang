import bookCatalogData from '../components/book-catalog/book-catalog-data';

const getBookColor = (activeBook: number): string => {
  const foundBook = bookCatalogData.find((book) => book.id === activeBook);
  if (foundBook) return foundBook.color;

  return '#444f5a';
};

export default getBookColor;
