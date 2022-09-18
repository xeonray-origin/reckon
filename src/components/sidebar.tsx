import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ListItemTextStyle, SidebarStyles } from '@styles';
import config from '@config';
import { LogoColored } from '../static/svg';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const redirect = (path: string) => {
    router.replace(path);
  };

  return (
    <Drawer
      PaperProps={{
        sx: SidebarStyles,
      }}
      variant="permanent"
      anchor={'left'}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <LogoColored />
          </ListItemIcon>
          <ListItemText sx={ListItemTextStyle}>{config.appName}</ListItemText>
        </ListItem>
      </List>
      <List>
        {config.sidebar.map((item, index) => {
          return (
            <ListItemButton key={index} onClick={() => redirect(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText sx={ListItemTextStyle}>{item.label}</ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
