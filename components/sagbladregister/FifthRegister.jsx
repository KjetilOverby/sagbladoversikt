import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ArticlePadding from '../../config/ArticlePadding';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5rem',
  },
  img: {
    width: '100%',
  },
  endContainer: {
    marginTop: '5rem',
    justifyContent: 'center',
    width: '100%    ',
    display: 'flex',
    marginBottom: '10rem',
  },
  lastContainer: {
    marginTop: '5rem',
  },
  paddingContainer: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
      marginTop: '2rem',
    },
  },
}));
const FifthRegister = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Grid container>
          <Grid lg={6} item className={classes.paddingContainer}>
            <Typography>
              I forbindelse med mobilappen så har jeg utvidet databasen med vrak
              og servicehistorikk. Jeg starter også en ny webapplikasjon som
              viser litt oversikt over de nye dataene. Her kan man vise hvor
              mange sagblader som er nye eller som er omloddet 1 gang eller 2
              ganger osv. Da vil man også få et innblikk i hvor mange blader som
              snart skal vrakes.
            </Typography>
            <br />
            <Typography>
              Her kan man vise hvor mange sagblader som er nye eller som er
              omloddet 1 gang eller 2 ganger osv. Da vil man også få et innblikk
              i hvor mange blader som snart skal vrakes. sammenligninger mellom
              i år og i fjor, denne måned fra forrige. Balanse mellom innkjøp og
              vrak osv.
            </Typography>
          </Grid>
          <Grid lg={6} item className={classes.paddingContainer}>
            <img
              className={classes.img}
              src="https://lh3.googleusercontent.com/pw/ACtC-3fOp_PybZt7DCkUOcBtvxsGA9A4-MN_pC8jKAayECcAve9Os8PvxhZHZzhu-f9iIUjgrfLmJJixTCgR2XwJSvcWBC35RJAzXLkmFO3N2bZjpVHEJ_eX868sXr3qPjgv4aZKK046qi6saKn_8QuFkFKp=w1920-h1080-no?authuser=0"
              alt=""
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container className={classes.lastContainer}>
          <Grid lg={6} item className={classes.paddingContainer}>
            <img
              className={classes.img}
              src="https://lh3.googleusercontent.com/pw/ACtC-3dTPP_eqH_OdW1UIrIcwSPl_ad7LETztMevAeklejSSHF_CclQJiXLVZCmeEjd9t0HPTOqj9O4uBBRr-ELxutIAr24tErucp0IihkrMP3jzwPEC5F9x61jg2V7LTEk4To2pT-RPwaFpnCGzuIOCzM1Y=w1920-h1080-no?authuser=0"
              alt=""
            />
          </Grid>
          <Grid lg={6} item className={classes.paddingContainer}>
            <img
              className={classes.img}
              src="https://lh3.googleusercontent.com/pw/ACtC-3cx1bpwecUUslToi4leISrAMiiARKuIYbScQfrDe6_foSciDWNGyJVlovf1AbHBrd1hT2B4SwBVgB39IOfAM5uakDRhZqFrdiwxMtunln25a7nJ1c0voeKeeZr4RZt48YXiTWMJ7UlK8waQKV1DLySC=w1920-h1080-no?authuser=0"
              alt=""
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FifthRegister;
