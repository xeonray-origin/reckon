import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import { AppsIcon, BellIcon, SettingsIcon } from '@static/svg';
import { TopbarStyles } from '../styles/topbar';
import { Stack } from '@mui/system';
import { grey } from '@mui/material/colors';
const Topbar = () => {
  return (
    <Box sx={TopbarStyles}>
      <Grid
        sx={{ pr: '3rem' }}
        container
        alignItems="center"
        justifyContent="flex-end"
      >
        <Stack direction="row" spacing={2}>
          <Box display="flex" alignItems="center">
            <Avatar
              sx={{ bgcolor: grey[500] }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              A
            </Avatar>
            <Typography padding={1} variant="caption">
              Amritendu Bhattacharjee
            </Typography>
          </Box>
          <IconButton>
            <BellIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Topbar;
