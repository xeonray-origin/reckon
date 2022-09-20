import { createTheme, Theme } from '@mui/material';
import { baseTheme } from './baseTheme';

export const lightTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    contrastThreshold: 3,
    primary: {
      main: '#1A0D3F',
    },
    background: {
      default: '#ebebeb',
      paper: '#FFFFFF',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
    },
  },
});
