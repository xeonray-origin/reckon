/* eslint-disable max-len */
import { Profile, HomepageTabs, InfoPanel } from '@components';
import {
  Box,
  Button,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  ChatIcon,
  CheckinPenIcon,
  HiFiIcon,
  ObjectiveIcon,
} from '../../static/svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

let OneOnOnePanelPaperStyles = {
  mt: 2,
  pb: 2,
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
};
let OneOnOnePanelHeaderStyles = {
  display: 'flex',
  p: '15px',
  justifyContent: 'space-between',
};
let OneOnOnePanelContentStyles = {
  m: '10px',
  border: '1px solid #D3D3D3',
  borderRadius: '10px',
  mt: 2,
};

let OneOnOnePanelBtnStyle = {
  textTransform: 'capitalize',
  color: '#1a0d3f',
  width: '190px',
};

let ToDoPanelPaperStyles = {
  mt: 2,
  pb: 2,
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
};

let ToDoPanelFilterBtnStyle = {
  textTransform: 'capitalize',
  color: '#1a0d3f',
  width: '120px',
};

let ToDoPanelHeaderStyles = {
  m: '10px',
  border: '1px solid #D3D3D3',
  borderRadius: '10px',
  mt: 2,
};

let CheckinBtnStyles = {
  color: '#DB3700',
  fontSize: '12px',
  lineHeight: '20px',
  fontWeight: 700,
};

let ActiveTextStyle = {
  color: '#6c00db',
  fontSize: '0.9rem',
  fontWeight: 600,
  lineHeight: 1.5,
};

let renderObjectivesPanelStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  p: 5,
};

const renderOneOnOnePanel = () => {
  return (
    <Paper sx={OneOnOnePanelPaperStyles}>
      <Box sx={OneOnOnePanelHeaderStyles}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <ChatIcon />
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            {' '}
            1-on-1s
          </Typography>
        </Box>

        <Typography sx={{ fontWeight: 400, color: '#6c00db' }}>
          {' '}
          Hide{' '}
        </Typography>
      </Box>

      <Box
        sx={{
          borderTop: '1px solid #D3D3D3',
        }}
      >
        <Box sx={OneOnOnePanelContentStyles}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
            <Box>
              <Typography sx={{ fontWeight: '600 !important' }}>
                {' '}
                Add talking points to your 1-on-1s.{' '}
              </Typography>
              <Typography sx={{ color: '#6c00db', textDecoration: 'none' }}>
                {' '}
                Go to your 1-on-1s{' '}
              </Typography>
            </Box>

            <Button variant="outlined" size="small" sx={OneOnOnePanelBtnStyle}>
              {' '}
              Add talking points
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

const renderToDoPanel = () => {
  return (
    <Paper sx={ToDoPanelPaperStyles}>
      <Box sx={{ display: 'flex', p: '15px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <ChatIcon />
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            {' '}
            To dos (2)
          </Typography>
        </Box>

        <Button variant="outlined" size="small" sx={ToDoPanelFilterBtnStyle}>
          {' '}
          Filter By
        </Button>
      </Box>

      <Box
        sx={{
          borderTop: '1px solid #D3D3D3',
        }}
      >
        <Box sx={ToDoPanelHeaderStyles}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CheckinPenIcon />
                <Typography sx={CheckinBtnStyles}> CHECK -IN </Typography>
              </Box>

              <Typography sx={{ fontWeight: '600 !important' }}>
                {' '}
                Your Check-in is due in 6 days
              </Typography>
              <Typography
                sx={{ color: '#5e5777!important', textDecoration: 'none' }}
              >
                {' '}
                Please submit your Check-in for Sep 17 - Sep 23.{' '}
                <b style={ActiveTextStyle}>Go to Check-in</b>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box sx={ToDoPanelHeaderStyles}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <CheckinPenIcon />
                <Typography sx={CheckinBtnStyles}> CHECK -IN </Typography>
              </Box>

              <Typography sx={{ fontWeight: '600 !important' }}>
                {' '}
                Your Priorities for Sep 17 - Sep 23
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip title="Mark Complete">
                  <IconButton>
                    <CheckCircleIcon />
                  </IconButton>
                </Tooltip>
                <Typography
                  sx={{ color: '#5e5777!important', textDecoration: 'none' }}
                >
                  Get better and faster at delivering features
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

const renderObjectivesPanel = () => {
  return (
    <Paper sx={ToDoPanelPaperStyles}>
      <Box sx={OneOnOnePanelHeaderStyles}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <ObjectiveIcon />
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            {' '}
            Objectives
          </Typography>
        </Box>

        <Typography sx={{ fontWeight: 400, color: '#6c00db' }}>
          {' '}
          Hide{' '}
        </Typography>
      </Box>

      <Box
        sx={{
          borderTop: '1px solid #D3D3D3',
        }}
      >
        <Box sx={renderObjectivesPanelStyles}>
          <ObjectiveIcon />
          <Typography>Are you aligned with the company’s strategy?</Typography>
          <Typography>
            Start by{' '}
            <span
              style={{
                color: '#6c00db',
                lineHeight: '20px',
              }}
            >
              creating an objective
            </span>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
const renderHiFiPanel = () => {
  return (
    <Paper
      sx={{
        ...ToDoPanelPaperStyles,
        height: '200px',
      }}
    >
      <Box sx={{ display: 'flex', p: '15px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <HiFiIcon />
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            {' '}
            Recently received High Fives
          </Typography>
        </Box>

        <Typography sx={{ fontWeight: 400, color: '#6c00db' }}>
          {' '}
          Hide{' '}
        </Typography>
      </Box>

      <Box
        sx={{
          borderTop: '1px solid #D3D3D3',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography> Development in Progress</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        mt: 17,
      }}
    >
      <Box sx={{ width: '900px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            mb: 3,
          }}
        >
          <Typography
            color="primary"
            variant="h1"
            sx={{
              fontSize: '35px',
              lineHeight: '36px',
              color: '#1a0d3f',
              fontWeight: 600,
            }}
          >
            {' '}
            Home{' '}
          </Typography>

          <Typography
            color="primary"
            sx={{
              fontSize: '1rem',
              lineHeight: 1.5,
              color: '#6c00db',
              textDecoration: 'none',
            }}
          >
            {' '}
            Company Directory{' '}
          </Typography>
        </Box>

        <Profile />
        <HomepageTabs />
        <InfoPanel
          message="Protip: Only you can see this Highlights tab. 
           We’ll surface the highest leverage to dos that need your attention for the week.
         The to dos will clear from the list once you complete the required action."
          bgColor="#FFF2E8"
          onDismiss={() => {
            console.log('handle dismiss');
          }}
        />

        {renderOneOnOnePanel()}
        {renderToDoPanel()}
        {renderObjectivesPanel()}
        {renderHiFiPanel()}
      </Box>
    </Box>
  );
};

export default Home;
