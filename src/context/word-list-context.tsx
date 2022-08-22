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

  const context: IWordListContext = useMemo(() => ({
    showTranslation,
    setShowTranslation,
    currentTracks,
    setCurrentTracks,
    currentPlayer,
    setCurrentPlayer,
  }), [showTranslation, currentTracks, currentPlayer]);

  return (
    <WordListContext.Provider value={context}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
