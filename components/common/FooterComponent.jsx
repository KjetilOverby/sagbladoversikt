import React, { useState } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Copyright from '../../src/Copyright';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '5rem',
    marginTop: '10rem',
    Width: '100vw',
    background: '#7e7e7e',
    display: 'grid',
    placeItems: 'center',
  },
}));
const FooterComponent = () => {
  const year = new Date().getFullYear();
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
