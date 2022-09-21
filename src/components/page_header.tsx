import { Grid, Stack, Typography } from '@mui/material';
import { Fragment } from 'react';

export interface IPageHeaderProps {
  type: '/home' | '/check-ins' | '/high-fives';
}

const PageHeader = (props: IPageHeaderProps) => {
  const { type } = props;

  if (type === '/home') {
    return (
      <Fragment>
        <Stack direction="row" sx={{ mt: '5rem', pb: '1rem' }}>
          <Typography
            color="primary"
            variant="h1"
            sx={{
              fontSize: '35px',
              lineHeight: '36px',
              color: '#1a0d3f',
              fontWeight: 600,
            }}
          >
            {' '}
            Home{' '}
          </Typography>
          <Grid container alignItems="center" justifyContent="flex-end">
            <Typography
              color="primary"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.5,
                color: '#6c00db',
                textDecoration: 'none',
              }}
            >
              {' '}
              Company Directory{' '}
            </Typography>
          </Grid>
        </Stack>
      </Fragment>
    );
  }

  if (type === '/high-fives') {
    return (
      <Fragment>
        <Stack direction="row" sx={{ mt: '5rem', pb: '1rem' }}>
          <Typography
            color="primary"
            variant="h1"
            sx={{
              fontSize: '35px',
              lineHeight: '36px',
              color: '#1a0d3f',
              fontWeight: 600,
            }}
          >
            {' '}
            High Fives{' '}
          </Typography>
        </Stack>
      </Fragment>
    );
  }

  if (type === '/check-ins') {
    return (
      <Fragment>
        <Stack direction="row" sx={{ mt: '5rem', pb: '1rem' }}>
          <Typography
            color="primary"
            variant="h1"
            sx={{
              fontSize: '35px',
              lineHeight: '36px',
              color: '#1a0d3f',
              fontWeight: 600,
            }}
          >
            {' '}
            Check-ins{' '}
          </Typography>
        </Stack>
      </Fragment>
    );
  }

  return <></>;
};

export default PageHeader;
