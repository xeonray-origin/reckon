import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { GoogleIcon, LogoColored } from '../static/svg';
import {
  LoginButtonStyles,
  LoginFooterContentStyles,
  LoginHeaderStyles,
  LoginMainContentStyles,
  LoginPaperStyles,
  LoginTextStyles,
} from '@styles';
import config from '@config';

interface ILoginPropTypes {
  // eslint-disable-next-line no-unused-vars
  onSignInButtonClick: (event: React.MouseEvent<HTMLElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onSocialSignInButtonClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const LoginCard = ({
  onSignInButtonClick,
  onSocialSignInButtonClick,
}: ILoginPropTypes) => {
  return (
    <Box>
      <Paper sx={LoginPaperStyles}>
        <Box sx={LoginHeaderStyles}>
          <LogoColored />
          <Typography variant="h6"> {config.appName} </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 1, alignItems: 'center', gap: '0.4rem' }}>
          <Typography variant="h4" sx={LoginTextStyles}>
            {' '}
            Sign In
          </Typography>
          <Box sx={LoginMainContentStyles}>
            <TextField label="Email" variant="outlined" size="small" />
            <TextField label="Password" variant="outlined" size="small" />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                />
              </FormGroup>
              <Typography sx={{ color: '#6c00db' }}>
                {' '}
                Forgot Password ?{' '}
              </Typography>
            </Box>
            <Button sx={LoginButtonStyles} onClick={onSignInButtonClick}>
              {' '}
              Sign In
            </Button>
            <Typography
              sx={{ width: '10px', margin: '0 auto 0', color: '#5e5777' }}
            >
              {' '}
              or{' '}
            </Typography>
            <Box
              sx={LoginFooterContentStyles}
              onClick={onSocialSignInButtonClick}
            >
              <GoogleIcon />
              <Typography sx={{ ml: '106px' }}> Sign in with Google</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginCard;
