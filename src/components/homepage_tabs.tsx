import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { defaultIndicatorStyles, tabIndicatorStyles } from '@styles';

interface TabsConfigType {
  key: number;
  label: string;
}

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let tabsConfig = [
    {
      key: 0,
      label: 'Highlights',
    },
    {
      key: 1,
      label: 'About',
    },
    {
      key: 2,
      label: 'Activity',
    },
    {
      key: 3,
      label: 'Wins & Challenges',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        disableRipple
        sx={defaultIndicatorStyles}
      >
        {tabsConfig.map((tab: TabsConfigType, i: number) => (
          <Tab
            key={i}
            label={tab.label}
            sx={{
              borderTop: value === tab.key ? '4px solid #1A0D3F' : null,
              backgroundColor: value === tab.key ? '#fff' : 'transparent',
              ...tabIndicatorStyles,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
