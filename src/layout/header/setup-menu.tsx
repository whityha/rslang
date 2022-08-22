import { FC, useState } from 'react';
import {
  Box,
  FormControlLabel,
  IconButton,
  Menu,
  Switch,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LightTooltip from '../../components/light-tooltip.tsx/light-tooltip';
import { useWordListContext } from '../../context/word-list-context';

const SetupMenu: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const context = useWordListContext();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (!context) return null;
  const { showTranslation, setShowTranslation } = context;

  return (
    <Box sx={{ flexGrow: 0 }}>
      <LightTooltip title="Открыть настройки">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <SettingsIcon />
        </IconButton>
      </LightTooltip>
      <Menu
        sx={{ mt: '30px' }}
        id="setup-menu"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Box sx={{ width: 250, px: 2 }}>
          <FormControlLabel
            control={(
              <Switch
                onChange={() => setShowTranslation(!showTranslation)}
                checked={showTranslation}
              />
            )}
            label={showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
          />
        </Box>
      </Menu>
    </Box>
  );
};

export default SetupMenu;
