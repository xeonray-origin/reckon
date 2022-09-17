/* eslint-disable max-len */
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CloseIcon from '@mui/icons-material/Close';
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
        <LightbulbOutlinedIcon fontSize="medium" />
      </Box>
      <Typography sx={InfoMessageStyles}>{message}</Typography>

      <IconButton disableRipple sx={InfoPanelCloseIconStyles}>
        <CloseIcon fontSize="small" color="disabled" />
      </IconButton>
    </Box>
  );
};

export default InfoPanel;
