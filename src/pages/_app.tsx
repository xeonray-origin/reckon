import config from '@config';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Layout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={config.appTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
