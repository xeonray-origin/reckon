import { createTheme, Theme } from '@mui/material';
import { baseTheme } from './baseTheme';

export const lightTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    contrastThreshold: 3,
    primary: {
      main: '#1A0D3F',
      light: '#483E64',
      contrastText: '#f1f1f2',
    },
    background: {
      default: '#ebebeb',
      paper: '#FFFCFB',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
});
