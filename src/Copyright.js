import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" style={{ color: '#ffffff' }}>
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Sagbladregister
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
