import { FC } from 'react';
import CategoryMenu from '../category-menu/category-menu';
import gameCatalogData from './game-catalog-data';

const GameCatalog: FC = () => (
  <CategoryMenu
    data={gameCatalogData}
    title="Игры"
  />
);

export default GameCatalog;
