import { FC } from 'react';
import { CardContent, Typography } from '@mui/material';

interface TextContainerProps {
  text: string;
  translate: string;
  showTranslation: boolean;
}

const TextContainer: FC<TextContainerProps> = ({ text, translate, showTranslation }) => (
  <CardContent sx={{ flex: '1 0 auto', pl: 4 }}>
    <Typography component="div" variant="body1" dangerouslySetInnerHTML={{ __html: text }} />
    { showTranslation && (
      <Typography component="div" dangerouslySetInnerHTML={{ __html: translate }} />
    ) }
  </CardContent>
);

export default TextContainer;
