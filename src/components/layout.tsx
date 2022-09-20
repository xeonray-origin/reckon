import { Box, Container, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { MainContentContainerStyles, MainContentStyles } from '@styles';
import { useRouter } from 'next/router';
import PageHeader from './page_header';
import Sidebar from './sidebar';
import Topbar from './topbar';

const Layout = (props: { children: any }) => {
  const { children } = props;
  const router = useRouter();
  const pageType: any = router.pathname;
  return (
    <Box>
      <Sidebar />
      <Topbar />
      <Box sx={MainContentStyles}>
        <Box sx={MainContentContainerStyles}>
          <>
            <PageHeader type={pageType} />
            {children}
          </>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
