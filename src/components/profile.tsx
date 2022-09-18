import { Avatar, Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  ProfileAvatarRootStyles,
  ProfileAvatarStyles,
  ProfileInfoContainerStyles,
  ProfileReportingSectionAvatorStyles,
  ProfileReportingSectionStyles,
  ProfileRootStyles,
  ProfileSettingsBtnStyles,
  ProfileTextStyles,
} from '@styles';

const Profile = () => {
  return (
    <Paper elevation={3} sx={ProfileRootStyles}>
      {' '}
      <Box sx={{ width: '100%' }}>
        <img
          src="https://d1nc1i29i07ajm.cloudfront.net/static/94c0aff8db6de9946dc3e105e57dbb2898fe311a/images/home-header-background.png"
          width="100%"
        />
      </Box>
      <Box sx={ProfileAvatarRootStyles}>
        <Avatar sx={ProfileAvatarStyles}>MA </Avatar>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={ProfileInfoContainerStyles}>
          <Box>
            <Typography sx={ProfileTextStyles}> Mohammed Adil </Typography>
            <Typography sx={{ color: '#5e5777!important' }}>
              {' '}
              Software Engineer{' '}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: '700 !important' }}>
                {' '}
                Reports to{' '}
              </Typography>
              <Box sx={ProfileReportingSectionStyles}>
                <Avatar sx={ProfileReportingSectionAvatorStyles}> BK </Avatar>
                <Typography sx={{ color: '#6c00db;' }}>
                  {' '}
                  Balakrishnan Kumar{' '}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography sx={{ fontWeight: '700 !important' }}>
                {' '}
                Email{' '}
              </Typography>
              <Typography sx={{ color: '#5e5777!important;', mt: 1 }}>
                {' '}
                mohammed.adil@optym.com{' '}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={ProfileSettingsBtnStyles}>
          <Box sx={{ padding: '8px' }}>
            <SettingsIcon />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Profile;
