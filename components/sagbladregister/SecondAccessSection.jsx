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
  textContainer: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
    },
  },
}));
const SecondAccessSection = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item item lg={6} xs={12} className={classes.textContainer}>
        <Typography>
          Jeg forsøkte å lage et system i Microsoft Excel, men jeg ville ha noe
          som kunne minne mer om en app der man kan klikke seg inn på
          forskjellige blader og søke opp id nummeret. Så jeg begynte å utvikle
          et system i Microsoft Access. Der kunne vi legge inn
          registreringsdato, hvilke datoer som de ble omloddet på og da hadde vi
          også telling på hvor mange ganger de har blitt omloddet. Man kunne
          legg inn en kommentar. Og vi kunne legge inn hvor mange stokker som
          sagbladet har saget. Senere så fjernet jeg stokkantall på bladene da
          dette var mye jobb å få lagt inn korrekt og at dataen på dette var
          meningsløse og ikke ble brukt til noe.
        </Typography>
        <br />
        <Typography>
          Mars 2016 begynner vi med å legge inn bladene våre i Access databasen.
        </Typography>
      </Grid>
      <Grid item item lg={6} xs={12} className={classes.textContainer}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3fUUwhTqUjqiLE6M_O_TWGuc30ABlEd0BfDYF5tu1d-MdvJz6i3-yNwPQ3s07Bl1GBNKsyWfH9TrCIjZvB274IphPTcPmFfdT-zU2boSuapJWeirS9wNdlPS1QXcX-_JwsakfD4nGl5DMKwq4KzvinB=w1824-h1080-no?authuser=0"
          alt=""
        />
      </Grid>
      <Grid
        item
        lg={6}
        xs={12}
        className={classes.textContainer}
        style={{ marginTop: '3rem' }}
      >
        <Typography>
          Det var heller ikke noe lettvint å bruke dataen til statistikk. Jeg
          lagde et opplegg der vi kunne se hvor mange blad som ble vraket eller
          lagt til. Men hver gang vi vraket et blad så måtte vi legge det til i
          vrakstatistikken manuelt. Det beste er at et program automatiserer det
          meste ellers blir det ikke gjort ordentlig til slutt og det endte med
          at vi bare registrerte antall omloddinger, for det måtte vi ha. Og
          statistikken ble skrotet.
        </Typography>
        <img
          style={{ marginTop: '3rem' }}
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3c2O5FpuFJtL2CIei2rDJ4P0bGI67kd7ucb5pAvkzezahWHRPRND2LLS9pKjvBovnTcqAOyvnrfChdTBKEZlgVXR95GOCaQzeT7tu8EEa3PYEbp4GIbRsFwkbVh5dU9z8oJttj4EnyP15-zMp_j7Yf7=w1824-h1080-no?authuser=0"
          alt=""
        />
      </Grid>
      <Grid
        item
        lg={6}
        xs={12}
        className={classes.textContainer}
        style={{ marginTop: '3rem' }}
      >
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3dx20wEvIQoKaL0K6h3eYtd5xK6S9meJut-m8Di0oFPLQDHaxIp7FLM3oGM4WXIvgz9ap1XtMXvVe-do7Utso5XJYnN1qertcYF4rcjJGYpY47dCy1jp3XLOmQTKZGwT6-rNyPNuhSIN2n8ZiX-XBrQ=w1824-h1080-no?authuser=0"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default SecondAccessSection;
