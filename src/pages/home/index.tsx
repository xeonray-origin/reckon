/* eslint-disable max-len */
import { Profile, HomepageTabs, InfoPanel } from '@components';
import {
  Avatar,
  Box,
  Button,
  Grid,
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
  ReactionIcon,
} from '../../static/svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  OneOnOnePanelPaperStyles,
  OneOnOnePanelHeaderStyles,
  OneOnOnePanelContentStyles,
  OneOnOnePanelBtnStyle,
  ToDoPanelPaperStyles,
  ToDoPanelFilterBtnStyle,
  ToDoPanelHeaderStyles,
  CheckinBtnStyles,
  ActiveTextStyle,
  renderObjectivesPanelStyles,
  hifiRootContainerStyles,
  hifiHideBtnStyles,
  hifiMergeAvatorStyles,
  hifiMergedAvatorStyles,
  hifiTimeStyles,
  hifiMentionStyles,
  hifiReactionRootStyles,
  hifiTooltipStyles,
  hifiSubContainerStyles,
} from '@styles';
import { fakeHifis } from '../../misc/seeds';

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
      }}
    >
      <Box sx={hifiRootContainerStyles}>
        <Box sx={hifiSubContainerStyles}>
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

        <Typography sx={hifiHideBtnStyles}> Hide </Typography>
      </Box>

      <Box
        sx={{
          borderTop: '1px solid #D3D3D3',
        }}
      >
        {fakeHifis.map((post, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ display: 'flex', p: 1, mt: 2 }}>
                <Avatar sx={hifiMergeAvatorStyles}>
                  {post.hifi_giver_initials}
                </Avatar>
                <Avatar sx={hifiMergedAvatorStyles}>
                  {post.hifi_receiver_initials}
                </Avatar>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography>
                  {' '}
                  <b style={{ fontWeight: '600 !important' }}>
                    {post.hifi_giver_display_name}
                  </b>{' '}
                  to{' '}
                  <b style={{ fontWeight: '600 !important' }}>
                    {' '}
                    {post.hifi_receiver_display_name}
                  </b>
                  <span style={hifiTimeStyles}>{post.time}</span>
                </Typography>
                <Typography>
                  <span style={hifiMentionStyles}>
                    @{post.hifi_receiver_display_name}
                  </span>{' '}
                  {post.hifi_message}
                </Typography>
                <Box sx={{ display: 'flex', mt: 1, alignItems: 'center' }}>
                  <Box sx={hifiReactionRootStyles}>
                    <Tooltip
                      title="You reacted with :heart"
                      arrow
                      sx={hifiTooltipStyles}
                    >
                      <IconButton>
                        <FavoriteIcon fontSize="small" color="error" />
                        <Typography sx={{ fontSize: '13px', ml: '0.1rem' }}>
                          {' '}
                          1
                        </Typography>
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <IconButton>
                    <ReactionIcon />
                  </IconButton>
                  <Typography sx={{ ml: 1, mr: 1 }}>&bull;</Typography>
                  <IconButton>
                    <ChatBubbleRoundedIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};

const Home = () => {
  return (
    <Grid container>
      <Box sx={{ width: '100%' }}>
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
    </Grid>
  );
};

export default Home;
