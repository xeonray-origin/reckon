import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Link,
  Divider,
} from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import {
  ActiveTabContainerStyle,
  AvatarStyle,
  BoxContainerStyles,
  TabsContainerStyle,
} from '@styles';
import {
  CheckInRatings,
  CheckInTabs,
  HighFive,
  ProfileBar,
  RecentCheckins,
  WeeklyCheckinForm,
} from '@components';

const CheckInFillout: NextPage = (props) => {
  return (
    <Box sx={BoxContainerStyles}>
      <Typography variant="h4" fontWeight={'bold'}>
        Check-ins
      </Typography>

      <CheckInTabs />

      <Typography variant="h5" fontWeight={500} sx={{ mt: 3 }}>
        My Check-in: Sept 10- Sept 16
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box id="checkin-container" mt={3}>
            <ProfileBar />

            <CheckInRatings />

            <WeeklyCheckinForm />

            <HighFive />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box mt={3}>
            <RecentCheckins />
          </Box>

          <Box id="reviewer-tab" mt={3}>
            <Card>
              <CardContent sx={{ display: 'block', textAlign: 'center' }}>
                <Avatar sx={AvatarStyle} />
                <Typography variant="h6">Manager Name</Typography>
                <Typography variant="body1">Reviewer</Typography>

                <Button fullWidth variant="outlined" sx={{ mt: 2 }}>
                  View 1-on-1
                </Button>
                <Button fullWidth variant="outlined" sx={{ mt: 2 }}>
                  Print
                </Button>

                <Divider sx={{ margin: '14px 0' }} />

                <Link>
                  <Typography variant="body1">
                    Who can view my Check-in?
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckInFillout;
