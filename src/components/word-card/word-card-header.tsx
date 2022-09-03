import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, CardContent, Typography } from '@mui/material';
import IconGroup from './icon-group';
import CardMarker from './card-marker';
import { useWordListContext } from '../../context/word-list-context';
import { Word } from '../../types/word';
import bookCatalogData from '../book-catalog/book-catalog-data';
import { useWords } from '../../redux/hooks';

interface WordCardHeaderProps {
  data: Word,
  paths: string[];
}

const WordCardHeader: FC<WordCardHeaderProps> = ({
  data,
  paths,
}) => {
  const { word, transcription, wordTranslate } = data;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const context = useWordListContext();

  if (!context) return null;
  const { showTranslation } = context;

  const words = useWords();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: matches ? 'row' : 'column',
        justifyContent: 'space-between',
        pl: 4,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CardMarker color={bookCatalogData[words.activeBook].color} />
        <CardContent sx={{
          flex: '1 0 auto',
          '&:last-child': {
            pb: matches ? 3 : 2,
          },
        }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#666666' }}>
            <Typography
              sx={{
                mr: 1,
                fontSize: 24,
                fontWeight: 700,
              }}
              component="div"
            >
              {word}
            </Typography>
            <Typography component="div">{transcription}</Typography>
          </Box>

          {showTranslation && (
          <Typography component="div">{wordTranslate}</Typography>
          )}
        </CardContent>
      </div>
      <IconGroup data={data} paths={paths} />
    </Box>
  );
};

export default WordCardHeader;
