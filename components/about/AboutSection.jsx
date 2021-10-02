import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
  },
  imgContainer: {
    paddingLeft: '1rem',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      marginBottom: '2rem',
    },
  },

  sectionPadding: {
    padding: '0 1 0 0rem',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  sectionPaddingContainer: {
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
const AboutSection = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h6" lg={12}>
          Denne nettsiden er utviklet spesielt for leverandør. Her er det
          oversikt over hvor mye vrak som blir foretatt hver måned og leverandør
          kan forsyne oss med blad som står i forhold til vrak.
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Grid container className={classes.sectionPaddingContainer}>
          <Grid item lg={6} className={classes.sectionPadding}>
            <Typography>
              I mars 2021 ble det ingått en avtale med leverandør. Dette
              innbærer at all verktøykjøp og service skal gå gjennom dem. De har
              allerede vært vår faste bladleverandør i flere år og de holder
              lager for oss som sikrer at vi ikke går tom for blader. For å få
              bedre flyt i lager av sagblad så får leverandør tilgang på data i
              våres sagbladregister. Der vil de få innsyn i antall blad av
              forskjellige typer, antall vrak og antall omloddinger per
              bladtype.
            </Typography>
            <br />
            <Typography>
              I dag er lagerbeholdningen ikke i balanse og leverandør har mange
              blad liggende i måneder og år. Denne appen skal være et
              hjelpemiddelfor nettopp dette.
            </Typography>
            <br />
            <Typography>
              Fordeler vi mener å oppnå ved bruk av denne appen er at leverandør
              skal levere nye blad fortløpende når sagblad hos oss blir vraket.
              Nye blir levert når servicebil kommer (2 ganger i måneden). Vi
              trenger da ikke å sende bestillinger på disse bladene da det vil
              være automatikk i leveransen. Bestillinger på 50 - 100 blader i
              samme slengen vil ikke skje mer og det sparer oss for enorme
              bladhåndteringer på samme tid. De skal ut av esker og plastikk for
              å så registrers i databasen. Utgiftene på innkjøp vil også fordele
              seg utover året.
            </Typography>
            <br />
            <Typography>
              Denne appen kan bli nyttig for leverandør når de skal holde lager
              for oss. Jeg startet å føre statistikk på vrak i november 2020.
              <a href="/sagbladregister">
                {' '}
                Les mer om sagbladregistreringens utvikling her
              </a>
            </Typography>
            <br />
            <Typography>
              Postarkiv er også en app som jeg har utvikler for sliperiet
              <a href="/postarkiv"> Les om utviklingen av den her</a>
            </Typography>
          </Grid>
          <Grid item lg={6} className={classes.imgContainer}>
            <img
              className={classes.img}
              src="https://lh3.googleusercontent.com/pw/ACtC-3csplsG0gappF-rZ7UcT4vms_lSM4PDqO_W-70bUQu9XGaIv0ZFsOu-6tED3b-zt-YplWpWKpGlrmqHjC4GJCF7BfeuIS5Uz3uhSsNyjxmcqGXjJ_sV5Hs7nhRgebPlJ2Tgj69pX8OO0U1-Ll4hNMHS=w1440-h1080-no?authuser=0"
              alt=""
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
