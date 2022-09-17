import { Box, Button, Grid, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import { ActiveTabContainerStyle, TabsContainerStyle } from '@styles';
import {
  CheckInRatings,
  HighFive,
  ProfileBar,
  WeeklyCheckinForm,
} from '@components';

const tabs = ['My Check-ins', 'Follow-ups'];

const CheckIn: NextPage = (props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Box p={4}>
      <Grid container maxWidth={970} margin="auto">
        <Grid item xs={12} md={8}>
          <Typography variant="h4">Check-ins</Typography>

          <Box id="tabs-container" display="flex" mt={2}>
            {tabs.map((tab: string, i: number) => (
              <Button
                onClick={() => {
                  setActiveTab(i);
                }}
                variant="text"
                key={i}
                sx={
                  activeTab === i ? ActiveTabContainerStyle : TabsContainerStyle
                }
              >
                <Typography variant="body1">{tab}</Typography>
              </Button>
            ))}
          </Box>
          <Box id="checkin-body" mt={3}>
            <Typography variant="h5" fontWeight={500}>
              My Check-in: Sept 10- Sept 16
            </Typography>

            <Box id="checkin-container" mt={2}>
              <ProfileBar />

              <CheckInRatings />

              <WeeklyCheckinForm />

              <HighFive />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckIn;
