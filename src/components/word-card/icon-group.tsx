import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Zoom from '@mui/material/Zoom';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} TransitionComponent={Zoom} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[3],
    fontSize: 14,
  },
}));

const styles = {
  height: 38,
  width: 38,
};

const IconGroup: FC = () => (
  <Box
    sx={{
      right: 0,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <LightTooltip title="Добавить в сложные">
      <IconButton>
        <StarIcon sx={styles} />
      </IconButton>
    </LightTooltip>
    <LightTooltip title="Ещё не изучено">
      <IconButton>
        <LightbulbIcon sx={styles} />
      </IconButton>
    </LightTooltip>
    <IconButton>
      <VolumeUpIcon sx={styles} />
    </IconButton>
  </Box>
);

export default IconGroup;
