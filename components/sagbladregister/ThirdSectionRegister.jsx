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
  imgText: {
    color: '#707070',
    fontStyle: 'italic',
  },
  textContainer: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
      marginTop: '2rem',
    },
  },
}));
const ThirdSectionRegister = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item item lg={6} xs={12} className={classes.textContainer}>
        <Typography>
          Mai 2020 starter prosjektet med å lage en webapplikasjon for
          sagbladregistrering. Men for å få all data inn i databasen på
          webapplikasjonen så må jeg legge inn alle blad på nytt og føre over
          dataen fra Microsoft Access databasen til den nye databasen manuelt.
          Jeg bruker <a href="https://www.mongodb.com/">MongoDB</a> som
          database, men å logge seg inn der og legge inn data manuelt i
          databasen er tidkrevende. Så jeg lagde et midlertidig lite program som
          forenklet overføringen.
        </Typography>
        <br />
        <Typography>
          Med all data på plass så blir Microsoft access skrotet og vi går over
          til den nye sagbladregisteret.
        </Typography>
      </Grid>
      <Grid item item lg={6} xs={12} className={classes.textContainer}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3exCcdbmcNggg-BRAFpygubbYY1KzdDSY-5LsnId-vmL2b1bB3zZJcqdKCeqONl--lKmlan1WavRGhqpSo_r_0K3AH88qt5MjlYjH71e56zgZqoftRS9AhMQ2WnXtJugwIl6LSmF4Q2I-2rLHVwKW1U=w1920-h1080-no?authuser=0"
          alt=""
        />
        <Typography className={classes.imgText}>
          På den nye applikasjonen så kan man i tillegg til å se hvor mange
          ganger et blad er omloddet, også se det i fargekoder. Der rød kode
          indikerer at det er på tide å få vraket bladet og ikke sende det til
          ny omlodding.
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        xs={12}
        className={classes.textContainer}
        style={{ marginTop: '3rem' }}
      >
        <Typography>
          Microsoft Access hadde en del begrensninger for hva man kan gjøre i
          forhold til programmering. For å legge inn service og dato så måtte
          man skrive inn informasjonen manuelt og når man får inn kanskje 30
          blad på en gang så blir det litt jobb. Med det nye så kan man bare med
          et klikk få inn service info og dagens dato automatisk.
        </Typography>
        <br />
        <Typography>
          Man kan også søke på id nummer på alle bladene fra et og samme sted.
          Man må ikke først finne fram riktig bladtype og så søke.
        </Typography>
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
          src="https://lh3.googleusercontent.com/pw/ACtC-3fDnMyn_Qga4NzfJszksrIpDVRM6Fvr1tcRnJdBEOgC30kpjm8FLOu23ODuBwFf5flanUVcYTJKvk4o1gpLyEWnTuTfHv4zim7idcgrhi0A36zAqiO4RGRnJiaykIDJrT0qOWW13f-TXz_fPzw0jlyp=w1155-h1080-no?authuser=0"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default ThirdSectionRegister;
