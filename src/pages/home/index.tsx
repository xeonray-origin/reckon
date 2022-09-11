import { Profile } from '@components';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box>
        <Typography color="primary" variant="h4">
          {' '}
          Home{' '}
        </Typography>
        <Profile />
      </Box>
    </Box>
  );
};

export default Home;
