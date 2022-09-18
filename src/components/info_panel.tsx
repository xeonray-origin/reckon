/* eslint-disable max-len */
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { LightbulbOutlined } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import {
  InfoMessageStyles,
  InfoPanelCloseIconStyles,
  InfoPanelRootStyles,
} from '@styles';

interface IInfoPanelProps {
  message: string | any;
  bgColor: string;
  onDismiss: () => void;
}

const InfoPanel = ({
  message,
  bgColor = '#FFF2E8',
  onDismiss,
}: IInfoPanelProps) => {
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        ...InfoPanelRootStyles,
      }}
    >
      <Box sx={{ mr: 2 }}>
        <LightbulbOutlined fontSize="medium" />
      </Box>
      <Typography sx={InfoMessageStyles}>{message}</Typography>

      <IconButton disableRipple sx={InfoPanelCloseIconStyles}>
        <Close fontSize="small" color="disabled" />
      </IconButton>
    </Box>
  );
};

export default InfoPanel;
