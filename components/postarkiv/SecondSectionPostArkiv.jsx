import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ArticlePadding from '../../config/ArticlePadding';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  img: {
    width: '100%',
  },
  imgContainer: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
    },
  },
  imgText: {
    color: '#707070',
    fontStyle: 'italic',
  },
  textContainer: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
    },
  },
}));
const SecondSectionPostArkiv = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item lg={6} className={classes.imgContainer}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3ccAFWFowR6fpwLMZmdhOBFw6oUfNGpOq8jvUun1mu9p7QTZFyToV__lZOUFX83Vf4fSLDf0j8h-ZhcJgQclewS6uNOxitmyNbwGY1Lrgt4AU4SDYwCdB40Rer5TBFCgcZf3gql2YDje8i9nVLb4aD9=w1686-h1024-no?authuser=0"
          alt="Excel picture"
        />
        <Typography className={classes.imgText}>
          Før sto alle postene på papir i permer og det kunne ta flere minutter
          å finne dem, eller kanskje bare å finne ut at posten ikke eksisterer i
          permen.
        </Typography>
      </Grid>
      <Grid item lg={6} className={classes.textContainer}>
        <Typography>
          Det begynte i April 2016, da lagde jeg en post-kalkulator i Microsoft
          Excel (før jeg hadde begynt med programmering).
        </Typography>
        <br />
        <Typography>
          I det originale utregningsprogrammet som er med i saglinja regner kun
          ut utfylling foran, og man må opp til saghuset og få det printet ut på
          papir for å så regne ut hvilke ringer som skal brukes. På denne tiden
          var det mye testing med nye mål og vi måtte stadig få nye post
          utskrifter. Jeg etterspurte programmet som de bruker på saga til
          sliperiet så vi kunne lage disse postene selv, men det ble aldri noe
          av. Det var da jeg kom på ideen om å lage et eget utregningsprogram så
          man kan bare lage postene selv og lagre dem så de blir enklere å
          finne. Dette Excelprogrammet erstatter det gamle systemet. Det blir
          brukt i nesten 4 år før et nytt program blir til.
        </Typography>
        <br />
      </Grid>
    </Grid>
  );
};

export default SecondSectionPostArkiv;
