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
  section2Container: {
    marginTop: '10rem',
  },
  textContainer: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
    },
  },
}));
const SixthSectionForService = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item lg={6} xs={12} className={classes.textContainer}>
        <Typography variant="body1">
          I dag så bruker vi stort sett Kanefusa blad i vår saglinje. Kanefusa
          har uforutsigbare leveringstider. Vi har opplevd flere ganger at
          leveringstiden kan bli flere måneder lenger en antatt. Dette gjør det
          vanskelig å vite når man bør bestille blader. Noen ganger har vi
          nesten gått tom for noen bladtyper fordi levering var forsinket.
        </Typography>
        <br />
        <Typography variant="body1">
          Løsningen på det ble at leverandør holder lager av bladene som vi
          trenger. De bestiller opp nye når vi henter ut. Men sånn som det er
          idag så forbruker vi blader til det begynner å bli lite og så henter
          vi ut fra lageret hos leverandør. Forbruket er forskjellig fra år til
          år og det er stor forskjell fra milde og kalde vintre. Det kan være
          litt vanskelig å vite hvor mye man bør ha på lager.
        </Typography>
        <br />
        <Typography variant="body1">
          Sagbladene er også i omløp hele tiden og det er svært varierende for
          hvor mange blad som er inne til omlodding. også hvor mange blad som
          står på vent til å sendes. Dette gjør det uoversiktlig over hvor mye
          blad vi egentlig har til enhver tid. Da må man i så fall drive å telle
          opp blad rundt omkring.
        </Typography>
      </Grid>
      <Grid item lg={6} xs={12} className={classes.textContainer}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3dsPCT1DOfJfa1MZO_JDy2RaXJQEealp_ZdSzXvYfLYubflWw9b0ok_Pp2ZGMifHAzD3macD0hxf3V2HkQYkPmNnuuAHURnTAfEN8UC56VR1mvty3gaTe6TUmLn4HKc28zU0ECeYFyXrn-7cax_EBPg=w1440-h1080-no?authuser=0"
          alt=""
        />
        <Typography className={classes.imgText}>
          Her henger sagblad på vent til neste sending. Her kan det også henge
          mange blad i perioder.
        </Typography>
      </Grid>
      <Grid item lg={12} xs={12}>
        <Grid container className={classes.section2Container}>
          <Grid item lg={6} xs={12} className={classes.textContainer}>
            <Typography variant="body1">
              Sagbladregisteret kan hjelpe oss med å ha litt mer kontroll hvor
              stort lager vi bør ha. Jeg har utviklet en applikasjon til
              leverandør som er denne appen her. Her er det oversikt over. Vi
              har sending hver 14 dag og det har vært snakk om å erstatte
              vrakede blade med nye i så korte intervaller hvis det er snakk om
              mye.
            </Typography>
            <br />
            <Typography variant="body1">
              Sending/levering vil ende på vilkårlige datoer å det ble vanskelig
              å lage en oversikt over registrerte hendelser i de intervallene.
              Jeg endte opp med å lage en søkefunksjon som leverandør selv kan
              velge hvilken tidsperiode de vil hente data fra. Det ble da gjort
              med at en kan velge startdato og sluttdato i en oversiktlig
              kalender.
            </Typography>
            <br />
            <Typography variant="body1"></Typography>
          </Grid>
          <Grid item lg={6} className={classes.textContainer}>
            <img
              className={classes.img}
              src="https://lh3.googleusercontent.com/pw/ACtC-3dX6yryXlnFuoNMZMvITF11PJoweLRg7_Ilu-jn8zS_UrerGsHP-bm3PEX_CpVKqevP3yvz5cgZnyknCszQMFRJQlWg6YYKJOZptRtXuwoVdK9nBxvejUOOh0Nk3VBhgUXJ3mi8j4dATe1XJVUY4IqZ=w1920-h1080-no?authuser=0"
              alt=""
            />
            <Typography className={classes.imgText}>
              Her kan man velge en periode i en kalender å få data som er
              registrert kun i den valgte tidsperioden.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SixthSectionForService;
