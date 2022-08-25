import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import { CatalogItem } from '../../types/catalog-item';

interface ButtonMenuProps {
  data: CatalogItem[];
  active: CatalogItem;
  setActive: (value: CatalogItem) => void;
}

const ButtonMenu: FC<ButtonMenuProps> = ({ data, active, setActive }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const textColor = '#ffffff';

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const clickHandler = (value: CatalogItem): void => {
    if (!value.path) {
      setActive(value);
    } else {
      navigate(value.path);
    }
    handleClose();
  };

  return (
    <SpeedDial
      ariaLabel="button menu"
      icon={active.symbol}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="down"
      sx={{ position: 'sticky', top: 24 }}
      FabProps={{
        sx: {
          fontSize: 24,
          fontWeight: 700,
          color: textColor,
          bgcolor: active.color,
          border: `2px solid ${active.color}`,
          '&:hover': {
            bgcolor: active.color,
            borderColor: textColor,
          },
        },
      }}
    >
      {data.map((item) => (
        <SpeedDialAction
          key={item.id}
          icon={item.symbol}
          tooltipTitle=""
          onClick={() => clickHandler(item)}
          sx={{
            fontSize: 18,
            fontWeight: 700,
            color: textColor,
            bgcolor: item.color,
            border: `2px solid ${item.color}`,
            '&:hover': {
              bgcolor: item.color,
              borderColor: textColor,
            },
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default ButtonMenu;
