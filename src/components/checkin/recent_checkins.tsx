import { Card, CardContent, List, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CheckinListItem } from '@styles';

interface IRecentCheckins {}
const checkin = [
  {
    label: '17 Sept - 24 Sept',
    status: 'Current',
  },
  {
    label: '10 Sept - 17 Sept',
    status: 'Past due',
  },
  {
    label: '3 Sept - 10 Sept',
    status: 'Submitted on 10 September',
  },
  {
    label: '10 Sept - 17 Sept',
    status: 'Submitted on 10 September',
  },
  {
    label: '3 Sept - 10 Sept',
    status: 'Submitted on 10 September',
  },
];

const RecentCheckins: React.FC<IRecentCheckins> = (props) => {
  const [checkins, setCheckins] = useState(checkin);
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', pl: 0, pr: 0 }}>
        <Typography variant="h6">My recent Check-ins</Typography>

        <List sx={{ mt: 1 }}>
          {checkins.map((checkin: any, i: number) => (
            <ListItem key={i} sx={CheckinListItem}>
              <Typography variant="body2" fontWeight={600}>
                {checkin.label}
              </Typography>
              <Typography variant="caption">{checkin.status}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentCheckins;
