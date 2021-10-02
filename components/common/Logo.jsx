import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {},
  header1: {
    fontSize: '1rem',
  },
  header2: {
    fontSize: '.7rem',
    color: '',
  },

  logo: {
    height: '1.5rem',
  },
}));
const Logo = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <img
          className={classes.logo}
          src="https://coop.no/globalassets/coop-obs-bygg/brands/moelven/moelven_logo.blaa.png"
          alt=""
        />
      </Grid>
      <Grid item>
        <Typography className={classes.header1}>Moelven Våler AS</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.header2}>Sagbladregister</Typography>
      </Grid>
    </Grid>
  );
};

export default Logo;
