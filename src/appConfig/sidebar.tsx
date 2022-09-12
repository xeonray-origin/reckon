import {
  CheckInIcon,
  EngagementIcon,
  FeedbackIcon,
  HighFiveIcon,
  HomeIcon,
  OneOnOneIcon,
  SelfReviewIcon,
} from '@static/svg';
import ObjectiveIcon from '../static/svg/objectives';

export const sidebarConfig = [
  {
    icon: <HomeIcon />,
    label: 'Home',
    path: '/home',
  },
  {
    icon: <CheckInIcon />,
    label: 'Check-ins',
    path: '/check-ins',
  },
  {
    icon: <OneOnOneIcon />,
    label: '1-on-1s',
    path: '/one-on-one',
  },
  {
    icon: <HighFiveIcon />,
    label: 'High Fives',
    path: '/high-fives',
  },
  {
    icon: <ObjectiveIcon />,
    label: 'Objectives',
    path: '/objectives',
  },
  {
    icon: <FeedbackIcon />,
    label: 'Request Feedback',
    path: '/feedback',
  },
  {
    icon: <SelfReviewIcon />,
    label: 'Best-Self Review',
    path: '/review',
  },
  {
    icon: <EngagementIcon />,
    label: 'Engagement',
    path: '/engagement',
  },
];
