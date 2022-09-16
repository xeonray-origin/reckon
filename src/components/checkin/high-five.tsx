import { Box, Card, CardContent, Typography, TextField } from '@mui/material';
import React from 'react';

interface IHighFive {}

const HighFive: React.FC<IHighFive> = (props) => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Give a High Five
        </Typography>

        <Typography variant="body1">
          Appreciate teammates by sharing the impact they had on you. Use
          hashtags to aligh their actions with company values. Only public High
          Fives will be posted to the feed. Learn more
        </Typography>

        <Box id="input-container" mt={2}>
          <TextField placeholder="Write a message" fullWidth />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HighFive;
