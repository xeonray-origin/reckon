import config from '@config';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={config.appTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
