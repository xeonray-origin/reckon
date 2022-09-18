import React from 'react';
import { LoginCard } from '@components';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const handleSignIn = (event: React.MouseEvent<HTMLElement>) => {
    router.replace('/home');
  };

  const handleSocialSignIn = (event: React.MouseEvent<HTMLElement>) => {
    router.replace('/home');
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
