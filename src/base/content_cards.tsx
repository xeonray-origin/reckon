import {
  Box,
  Button,
  Card,
  CardHeader,
  Paper,
  Typography,
} from '@mui/material';
import {
  OneOnOnePanelBtnStyle,
  OneOnOnePanelContentStyles,
  OneOnOnePanelHeaderStyles,
  OneOnOnePanelPaperStyles,
} from '@styles';
import { ReactNode } from 'react';

interface IContentCardProps {
  title: string;
  icon?: React.ReactNode;
  isHidable?: boolean;
  children: ReactNode[];
  actionButtonLabel: string;
  onClickAction: () => void;
}

const ContentCard = (props: IContentCardProps) => {
  const {
    title,
    icon,
    isHidable = false,
    children,
    onClickAction,
    actionButtonLabel,
  } = props;

  return (
    <Paper sx={OneOnOnePanelPaperStyles}>
      <Box sx={OneOnOnePanelHeaderStyles}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {icon}
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            {' '}
            {title}
          </Typography>
        </Box>
        {isHidable && (
          <Typography sx={{ fontWeight: 400, color: '#6c00db' }}>
            {' '}
            Hide{' '}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          borderTop: '1px solid #D3D3D3',
        }}
      >
        <Box sx={OneOnOnePanelContentStyles}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
            <Box>{children}</Box>

            <Button
              onClick={onClickAction}
              variant="outlined"
              size="small"
              sx={OneOnOnePanelBtnStyle}
            >
              {' '}
              {actionButtonLabel}
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ContentCard;
