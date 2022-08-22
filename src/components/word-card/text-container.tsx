import { FC } from 'react';
import { CardContent, Typography } from '@mui/material';
import { useWordListContext } from '../../context/word-list-context';

interface TextContainerProps {
  text: string;
  translate: string;
}

const TextContainer: FC<TextContainerProps> = ({ text, translate }) => {
  const context = useWordListContext();

  if (!context) return null;
  const { showTranslation } = context;
  return (
    <CardContent sx={{ flex: '1 0 auto', pl: 4 }}>
      <Typography component="div" variant="body1" dangerouslySetInnerHTML={{ __html: text }} />
      { showTranslation && (
      <Typography component="div" sx={{ opacity: 0.75 }} dangerouslySetInnerHTML={{ __html: translate }} />
      ) }
    </CardContent>
  );
};

export default TextContainer;
