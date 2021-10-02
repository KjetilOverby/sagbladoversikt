import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@keyframes fadeIn': {
    '0%': {
      transform: 'translate(-1000px, 0px)',
    },
    '50%': {
      transform: 'translate(0px, 0px)',
      animationTimingFunction: 'ease-in-out',
    },
  },
  '@keyframes fadeIn2': {
    '0%': {
      transform: 'translate(1000px, 0px)',
    },
    '50%': {
      transform: 'translate(0px, 0px)',
      animationTimingFunction: 'ease-in-out',
    },
  },
  header: {
    color: ' #365ec4',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  line: {
    height: '2.5rem',
    width: '28rem',
    background: 'linear-gradient(to right, #8fa1ce, #4562ac)',
    animation: '$fadeIn2 3s',
    [theme.breakpoints.down('xs')]: {
      width: '17rem',
    },
  },
  logo: {
    height: '3.6rem',
    [theme.breakpoints.down('xs')]: {
      height: '2.2rem',
    },
  },
  logoContainer: {
    animation: '$fadeIn 3s',
  },
}));
const LogoLogin = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.logoContainer}>
        <img
          className={classes.logo}
          src="https://coop.no/globalassets/coop-obs-bygg/brands/moelven/moelven_logo.blaa.png"
          alt=""
        />
      </Grid>
      <Grid item>
        <Grid item className={classes.line}></Grid>
        <Typography variant="h2" className={classes.header}>
          Moelven Våler AS
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LogoLogin;
