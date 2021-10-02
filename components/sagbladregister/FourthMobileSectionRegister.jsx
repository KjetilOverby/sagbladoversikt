import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import ArticlePadding from '../../config/ArticlePadding';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5rem',
  },
  img: {
    width: '100%',
  },

  mobileImgContainer: {
    padding: ArticlePadding.paddingLarge,
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
      marginTop: '2rem',
    },
  },

  paddingContainer: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
      marginTop: '2rem',
    },
  },
}));
const FourthMobileSectionRegister = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid lg={12} item className={classes.paddingContainer}>
        <Container maxWidth="md">
          <Typography>
            Jeg har også drevet litt med React Native der man kan lage Native
            apper til mobil og legge ut på App store eller Google play. Jeg
            lagde sagbladregister også med React Native.
          </Typography>
          <br />
          <Typography>
            Native appen blir aldri lagt ut på Google Play eller App Store, men
            jeg får brukt den på min egen mobil. På backend siden legger jeg inn
            telling på vrak og hvor mange blad som er innom service. Dette
            oppdaterer seg automatisk når man legger inn det samme som jeg
            gjorde på Access appen. Mobil appen og webapplikasjonen er koblet
            til den samme databasen.
          </Typography>
        </Container>
      </Grid>
      <Grid lg={12} xs={12} item className={classes.mobileImgContainer}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3e7KDQRzsQFaGJb1t9hcA3DiGbUrbVdDffrxkH4_AOlvoQN-s4-vj-JjM6nQK8vErTFyn8R5YpVaPGj8udK5TGAFIAdjJiwQVgqPRsxz0v9HQOfV8y1JLML6ASkxPxVoxKxYlcLP5mlOd8Bl9a6yskG=w1920-h921-no?authuser=0"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default FourthMobileSectionRegister;
