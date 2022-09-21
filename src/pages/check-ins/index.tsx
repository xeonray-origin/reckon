import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import {
  AvatarStyle,
  BoxContainerStyles,
  CheckInFillButtonStyles,
  NextPageButtonStyles,
  PreviousPageButtonStyles,
} from '@styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { CheckInTabs } from '@components';

type CheckinType = {
  id?: string;
  frequency: string;
  status: string;
  action: string;
  actionType: 'fill' | 'filled';
};

const checkins: CheckinType[] = [
  {
    id: '1',
    frequency: 'Sept 17 - Sept 23',
    status: '--',
    action: 'Action',
    actionType: 'fill',
  },
  {
    id: '2',
    frequency: 'Sept 10 - Sept 16',
    status: 'Draft Saved',
    action: 'Action',
    actionType: 'filled',
  },
  {
    id: '3',
    frequency: 'Sept 3 - Sept 9',
    status: 'Sept 10, 2022',
    action: 'Action',
    actionType: 'filled',
  },
  {
    id: '4',
    frequency: 'Sept 17 - Sept 23',
    status: '--',
    action: 'Action',
    actionType: 'fill',
  },
  {
    id: '5',
    frequency: 'Sept 10 - Sept 16',
    status: 'Draft Saved',
    action: 'Action',
    actionType: 'filled',
  },
  {
    id: '6',
    frequency: 'Sept 3 - Sept 9',
    status: 'Sept 10,2022',
    action: 'Action',
    actionType: 'filled',
  },
];

const Checkins: NextPage = (props) => {
  return (
    <Box sx={BoxContainerStyles}>
      <CheckInTabs />

      <Typography variant="h5" fontWeight={500} sx={{ mt: 3 }}>
        My Check-ins
      </Typography>

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent sx={{ minHeight: '50vh' }}>
              <TableContainer sx={{ height: '100%' }}>
                <Table aria-label="checkin-table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ minWidth: '100px' }}>
                        <Typography variant="body1" fontWeight={600}>
                          Check-in frequency
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ minWidth: '100px' }}>
                        <Typography variant="body1" fontWeight={600}>
                          Submitted
                        </Typography>
                      </TableCell>
                      <TableCell align="right" sx={{ minWidth: '250px' }}>
                        <Typography variant="body1" fontWeight={600}>
                          Action
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {checkins.map((checkin: CheckinType, i: number) => (
                      <TableRow key={i}>
                        <TableCell sx={{ width: '100%' }}>
                          <Typography variant="body1">
                            {checkin.frequency}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ width: '100%' }}>
                          <Typography variant="body1">
                            {checkin.status}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ width: '100%', textAlign: 'end' }}>
                          <Link
                            href="/check-ins/fillout"
                            sx={{ textDecoration: 'none' }}
                          >
                            <Button
                              variant={
                                checkin.actionType === 'fill'
                                  ? 'contained'
                                  : 'outlined'
                              }
                              sx={
                                checkin.actionType === 'fill'
                                  ? CheckInFillButtonStyles
                                  : { textTransform: 'capitalize' }
                              }
                            >
                              {checkin.actionType === 'fill'
                                ? 'Fill out Check-in'
                                : 'View Check-in'}
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box mt={2} textAlign="center">
                <Button variant="outlined" sx={PreviousPageButtonStyles}>
                  <NavigateBeforeIcon sx={{ fontSize: '14px' }} />
                  Newer
                </Button>
                <Button variant="outlined" sx={NextPageButtonStyles}>
                  Older
                  <NavigateNextIcon sx={{ fontSize: '14px' }} />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={0} md={4}>
          <Card>
            <CardContent sx={{ display: 'block', textAlign: 'center' }}>
              <Avatar sx={AvatarStyle}>BK</Avatar>
              <Typography variant="h6" sx={{ mt: 1 }}>
                Manager Name
              </Typography>
              <Typography variant="body1">Reviewer</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkins;
