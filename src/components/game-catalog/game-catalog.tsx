import { FC } from 'react';
import { useWordListContext } from '../../context/word-list-context';
import CategoryMenu from '../category-menu/category-menu';
import gameCatalogData from './game-catalog-data';

const GameCatalog: FC = () => {
  const context = useWordListContext();

  if (!context) return null;
  const { activeBook, setActiveBook } = context;

  return (
    <CategoryMenu
      data={gameCatalogData}
      active={activeBook}
      title="Игры"
      setActive={setActiveBook}
    />
  );
};

export default GameCatalog;
