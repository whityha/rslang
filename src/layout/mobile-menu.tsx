import React, {
  FC, useState, useEffect, MouseEvent, KeyboardEvent,
} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListMenu from '../components/list-menu/list-menu';

interface MobileMenuProps {
  openMenu: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpenMenu: (value: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ openMenu, setOpenMenu }: MobileMenuProps) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(openMenu);
  }, [openMenu]);

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
          bgcolor: 'primary.main',
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
