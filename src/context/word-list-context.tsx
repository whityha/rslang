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
}

interface WordListProviderProps {
  children: ReactNode;
}

const WordListContext = createContext<IWordListContext | null>(null);

export const useWordListContext = (): IWordListContext | null => useContext(WordListContext);

const WordListProvider: FC<WordListProviderProps> = ({ children }) => {
  const [showTranslation, setShowTranslation] = useState<boolean>(true);

  const context: IWordListContext = useMemo(() => ({
    showTranslation,
    setShowTranslation,
  }), [showTranslation]);

  return (
    <WordListContext.Provider value={context}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
