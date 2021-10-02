import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '10rem',
    marginBottom: '10rem',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2rem',
    },
  },
  containerTag: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
const FifthSectionPostArkiv = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerTag}>
      <Grid container className={classes.container}>
        <Grid item>
          <Typography variant="body1">
            Litt før sommer ferien i 2020 blir den andre postarkiv appen tatt i
            bruk, denne erstatter da alt som tidligere er brukt. Januar 2021 har
            jeg en forespørsel om jeg kan få betalt for det jeg har laget. Denne
            appen er den første betalte jobben som programmerer. Dette
            prosjektet har vært svært lærerikt og spennende.
          </Typography>
          <br />
          <Typography variant="body1">
            Teknologier som er brukt i denne appen er{' '}
            <a target="_blank" href="https://reactjs.org/">
              React
            </a>
            ,{' '}
            <a target="_blank" href="https://nextjs.org/">
              Next.js
            </a>
            ,{' '}
            <a target="_blank" href="https://material-ui.com/">
              Material ui
            </a>
            , Node.js. Database er{' '}
            <a target="_blank" href="https://www.mongodb.com/">
              Mongo DB
            </a>{' '}
            og innlogging er det brukt{' '}
            <a
              className={classes.atag}
              target="_blank"
              href="https://auth0.com/"
            >
              Auth0.
            </a>
            og her er en link til
            <a href="https://mkv-calculator-mobile.vercel.app/">
              Postarkiv.
            </a>{' '}
            Appen er publisert med <a href="https://vercel.com/">Vercel</a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default FifthSectionPostArkiv;
