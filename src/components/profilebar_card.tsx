import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import { ProfileBarActiveDueDot } from '@styles';

interface IProfileBar {}

const ProfileBar: React.FC<IProfileBar> = (props) => {
  return (
    <Card>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: '48px', height: '48px' }} />

        <Box id="user-details" ml={2}>
          <Typography variant="h6">Shivam Chamoli</Typography>
          <Typography variant="caption">Software Engineer</Typography>
          <Link>
            <Typography variant="subtitle2">
              View your 1-on-1 with Bala...
            </Typography>
          </Link>
        </Box>

        <Box ml="auto" display={'flex'} alignItems="center">
          <Box sx={ProfileBarActiveDueDot}></Box>
          <Typography variant="body1">Due a day ago</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileBar;
