import React from 'react';
import { LoginCard } from '@components';
import { Box } from '@mui/material';

const Login = () => {
  const handleSignIn = (event: React.MouseEvent<HTMLElement>) => {
    console.log('Handle Sign In', event);
  };

  const handleSocialSignIn = (event: React.MouseEvent<HTMLElement>) => {
    console.log('Handle Social Sign In', event);
  };

  return (
    <Box>
      <LoginCard
        onSignInButtonClick={handleSignIn}
        onSocialSignInButtonClick={handleSocialSignIn}
      />
    </Box>
  );
};

export default Login;
