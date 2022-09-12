import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ListItemTextStyle, SidebarStyles } from '@styles';
import config from '@config';
import { BellIcon, LogoColored } from '../static/svg';
import { TopbarStyles } from '../styles/topbar';
import { Stack } from '@mui/system';
const Topbar = () => {
  return (
    <Box sx={TopbarStyles}>
      <Stack direction="row" spacing={2}>
        <IconButton>
          <BellIcon />
        </IconButton>
        <IconButton>
          <BellIcon />
        </IconButton>
        <IconButton>
          <BellIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Topbar;
