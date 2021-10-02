import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import FirstSectionPostArkiv from './FirstSectionPostArkiv';
import SecondSectionPostArkiv from './SecondSectionPostArkiv';
import ThirdSectionPostArkiv from './ThirdSectionPostArkiv';
import FourthSectionPostArkiv from './FourthSectionPostArkiv';
import FifthSectionPostArkiv from './FifthSectionPostArkiv';
import SixthSection from './SixthsSection';

const useStyles = makeStyles((theme) => ({
  header: {
    margin: '3rem 0 10rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: '0rem 0 4rem 0',
    },
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '5rem',
  },
  postArkivExp: {
    backgroundColor: '#eee',
  },
}));
const PostArkivStartPage = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item className={classes.headerContainer}>
          <Typography variant="h4">Postarkiv</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <FirstSectionPostArkiv />
      </Grid>
      <Grid item className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Post kalkulator
        </Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <SecondSectionPostArkiv />
        </Grid>
      </Grid>
      <Grid item className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Programmering
          <Typography variant="h6">Postarkiv</Typography>
          <Typography style={{ color: '#858585', fontStyle: 'italic' }}>
            (Første utgave)
          </Typography>
        </Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <ThirdSectionPostArkiv />
        </Grid>
      </Grid>
      <Grid item className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Database
          <Typography variant="h6">Postarkiv</Typography>
          <Typography style={{ color: '#858585', fontStyle: 'italic' }}>
            (Andre utgave)
          </Typography>
        </Typography>
      </Grid>
      <Grid container>
        <Grid item>
          <FourthSectionPostArkiv />
        </Grid>
      </Grid>
      <Grid item className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Gammelt system
          <Typography style={{ color: '#858585', fontStyle: 'italic' }}>
            (Permer)
          </Typography>
        </Typography>
      </Grid>
      <Grid container>
        <Grid item style={{ width: '100%' }}>
          <SixthSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostArkivStartPage;
