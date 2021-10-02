import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import FirstSectionRegister from './FirstSectionRegister';
import SecondAccessSection from './SecondAccessSection';
//import ThirdSectionPostArkiv from '../postarkiv/ThirdSectionPostArkiv';
import ThirdSectionRegister from './ThirdSectionRegister';
import FourthMobileSectionRegister from './FourthMobileSectionRegister';
import FifthRegister from './FifthRegister';
import SixthSectionForService from './SixthSectionForService';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '6rem',
    marginBottom: '1rem',
  },
  postArkivExp: {
    backgroundColor: '#eee',
  },
}));
const SagbladregisterStartPage = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item className={classes.headerContainer}>
          <Typography className={classes.header} variant="h4">
            Sagbladregistrering
          </Typography>
        </Grid>
        <Grid container>
          <FirstSectionRegister />
        </Grid>
      </Grid>
      <Grid item className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Microsoft Access
        </Typography>
      </Grid>
      <Grid container>
        <SecondAccessSection />
      </Grid>
      <Grid item className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Web applikasjon
        </Typography>
      </Grid>
      <Grid container>
        <ThirdSectionRegister />
      </Grid>
      <Grid item className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Mobil App
        </Typography>
      </Grid>
      <Grid container>
        <FourthMobileSectionRegister />
      </Grid>
      <Grid item className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Sagbladregister 2
        </Typography>
      </Grid>
      <Grid container>
        <FifthRegister />
      </Grid>
      <Grid item className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Leverandør
        </Typography>
      </Grid>
      <Grid container>
        <SixthSectionForService />
      </Grid>
    </Container>
  );
};

export default SagbladregisterStartPage;
