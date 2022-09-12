import { Box, Container } from '@mui/material';
import { MainContentContainerStyles, MainContentStyles } from '@styles';
import Sidebar from './sidebar';
import Topbar from './topbar';

const Layout = (props: { children: any }) => {
  const { children } = props;
  return (
    <Box>
      <Sidebar />
      <Box sx={MainContentStyles}>
        <Topbar />
        <Box sx={MainContentContainerStyles}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
