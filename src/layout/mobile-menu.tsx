import React, {
  FC, useState, useEffect, MouseEvent, KeyboardEvent,
} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListMenu from '../components/list-menu/list-menu';
import { useWordListContext } from '../context/word-list-context';

interface MobileMenuProps {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ openMenu, setOpenMenu }: MobileMenuProps) => {
  const context = useWordListContext();
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(openMenu);
  }, [openMenu]);

  if (!context) return null;
  const { activeBook } = context;

  const toggleDrawer = () => (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(false);
    setOpenMenu(false);
  };

  return (
    <Drawer open={state} onClose={toggleDrawer()}>
      <Box
        sx={{
          width: 240,
          display: 'flex',
          flexGrow: 1,
          bgcolor: activeBook.color,
        }}
        role="presentation"
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <ListMenu open={state} />
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
