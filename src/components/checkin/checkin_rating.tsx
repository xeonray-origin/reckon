import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import React from 'react';
import { RatingsContainer } from '../../styles';

interface ICheckInRating {}

const CheckInRating: React.FC<ICheckInRating> = (props) => {
  const ratings = [1, 2, 3, 4, 5];

  const RatingsTemplate = () => {
    return (
      <>
        {ratings.map((rating: number, i: number) => (
          <Box key={i} sx={RatingsContainer}>
            <Typography variant="h6">{rating}</Typography>
          </Box>
        ))}
      </>
    );
  };
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6">
          How did you feel at work this week?
        </Typography>

        <Box
          id="rating-container"
          display="flex"
          alignItems="center"
          justifyContent={'center'}
          mt={1}
          mb={1}
        >
          <Typography variant="body1">Awful</Typography>

          <RatingsTemplate />

          <Typography variant="body1">Amazing!</Typography>
        </Box>

        <Link>
          <Typography variant="body1">
            {"Is there anything blocking you that you'd like to addressed?"}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CheckInRating;
