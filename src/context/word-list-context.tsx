import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import bookCatalogData from '../components/book-catalog/book-catalog-data';
import { getHardWords } from '../inc/api';
import { CatalogItem } from '../types/catalog-item';
import { Words } from '../types/word';
import transformData from './transform-data';

export interface IWordListContext {
  showTranslation: boolean;
  setShowTranslation: (value: boolean) => void;
  currentTracks: NodeListOf<HTMLAudioElement> | null;
  setCurrentTracks: (value: NodeListOf<HTMLAudioElement> | null) => void;
  currentPlayer: string;
  setCurrentPlayer: (value: string) => void;
  activeBook: CatalogItem;
  setActiveBook: (value: CatalogItem) => void;
  difficultWords: Words;
  setDifficultWords: (value: Words) => void;
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
  const [difficultWords, setDifficultWords] = useState<Words>([]);
  const [studied, setStudied] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getHardWords();
      const data = response.paginatedResults.map((item) => transformData(item));
      setDifficultWords(data);
    };

    fetchData();
  }, []);

  const context: IWordListContext = useMemo(
    () => ({
      showTranslation,
      setShowTranslation,
      currentTracks,
      setCurrentTracks,
      currentPlayer,
      setCurrentPlayer,
      activeBook,
      setActiveBook,
      difficultWords,
      setDifficultWords,
      studied,
      setStudied,
      page,
      setPage,
    }),
    [
      showTranslation,
      currentTracks,
      currentPlayer,
      activeBook,
      difficultWords,
      studied,
      page,
    ],
  );

  return (
    <WordListContext.Provider value={context}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
