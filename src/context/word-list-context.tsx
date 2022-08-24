import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import bookCatalogData from '../components/book-catalog/book-catalog-data';
import { CatalogItem } from '../types/catalog-item';

interface IWordListContext {
  showTranslation: boolean;
  setShowTranslation: (value: boolean) => void;
  currentTracks: NodeListOf<HTMLAudioElement> | null;
  setCurrentTracks: (value: NodeListOf<HTMLAudioElement> | null) => void;
  currentPlayer: string;
  setCurrentPlayer: (value: string) => void;
  activeBook: CatalogItem;
  setActiveBook: (value: CatalogItem) => void;
  difficult: string[];
  setDifficult: (value: string[]) => void;
  studied: string[];
  setStudied: (value: string[]) => void;
  page: number;
  setPage: (value: number) => void;
}

interface WordListProviderProps {
  children: ReactNode;
}

const WordListContext = createContext<IWordListContext | null>(null);

export const useWordListContext = (): IWordListContext | null => useContext(WordListContext);

const WordListProvider: FC<WordListProviderProps> = ({ children }) => {
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [currentTracks, setCurrentTracks] = useState<NodeListOf<HTMLAudioElement> | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<string>('');
  const [activeBook, setActiveBook] = useState<CatalogItem>(bookCatalogData[0]);
  const [difficult, setDifficult] = useState<string[]>([]);
  const [studied, setStudied] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);

  const context: IWordListContext = useMemo(() => ({
    showTranslation,
    setShowTranslation,
    currentTracks,
    setCurrentTracks,
    currentPlayer,
    setCurrentPlayer,
    activeBook,
    setActiveBook,
    difficult,
    setDifficult,
    studied,
    setStudied,
    page,
    setPage,
  }), [showTranslation, currentTracks, currentPlayer, activeBook, difficult, studied, page]);

  return (
    <WordListContext.Provider value={context}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
