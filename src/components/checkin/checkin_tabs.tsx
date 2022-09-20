import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ActiveTabContainerStyle, TabsContainerStyle } from '@styles';
interface ICheckInTabs {}

const tabs = ['My Check-ins', 'Follow-ups'];

const CheckInTabs: React.FC<ICheckInTabs> = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <Box id="tabs-container" display="flex" mt={2}>
      {tabs.map((tab: string, i: number) => (
        <Button
          onClick={() => {
            setActiveTab(i);
          }}
          variant="text"
          key={i}
          sx={activeTab === i ? ActiveTabContainerStyle : TabsContainerStyle}
        >
          <Typography variant="body1">{tab}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default CheckInTabs;
