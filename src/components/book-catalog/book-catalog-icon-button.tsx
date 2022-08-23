import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LightTooltip from '../light-tooltip.tsx/light-tooltip';
import { useWordListContext } from '../../context/word-list-context';
import fabStyles from './fab-styles';
import ButtonContainer from './button-container';

interface BookCatalogIconButtonProps {
  bookId: number;
  color: string;
}

const BookCatalogIconButton: FC<BookCatalogIconButtonProps> = ({
  bookId,
  color,
}) => {
  const context = useWordListContext();
  const navigate = useNavigate();

  if (!context) return null;
  const { activeBook } = context;

  return (
    <ButtonContainer>
      <LightTooltip title="Сложные слова">
        <Fab
          size="medium"
          onClick={() => navigate('/difficult-words')}
          sx={fabStyles(activeBook, bookId, color)}
        >
          <SchoolIcon fontSize="small" sx={{ color: '#ffffff' }} />
        </Fab>
      </LightTooltip>
    </ButtonContainer>
  );
};

export default BookCatalogIconButton;
