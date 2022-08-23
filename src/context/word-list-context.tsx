import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

interface IWordListContext {
  showTranslation: boolean;
  setShowTranslation: (value: boolean) => void;
  currentTracks: NodeListOf<HTMLAudioElement> | null;
  setCurrentTracks: (value: NodeListOf<HTMLAudioElement> | null) => void;
  currentPlayer: string;
  setCurrentPlayer: (value: string) => void;
  activeBook: number;
  setActiveBook: (value: number) => void;
  difficult: string[];
  setDifficult: (value: string[]) => void;
  studied: string[];
  setStudied: (value: string[]) => void;
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
  const [activeBook, setActiveBook] = useState<number>(0);
  const [difficult, setDifficult] = useState<string[]>([]);
  const [studied, setStudied] = useState<string[]>([]);

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
  }), [showTranslation, currentTracks, currentPlayer, activeBook, difficult, studied]);

  return (
    <WordListContext.Provider value={context}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
