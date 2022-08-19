import { CardContent, Typography } from '@mui/material';
import { FC } from 'react';

interface TextContainerProps {
  text: string;
  translate: string;
  showTranslation: boolean;
}

const TextContainer: FC<TextContainerProps> = ({ text, translate, showTranslation }) => (
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography component="div" variant="body1">
      {text}
    </Typography>
    { showTranslation && (
      <Typography component="div">
        { translate }
      </Typography>
    ) }
  </CardContent>
);

export default TextContainer;
