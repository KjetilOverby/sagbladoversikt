import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ArticlePadding from '../../config/ArticlePadding';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
  },
  imgContainer: {
    padding: ArticlePadding.paddingLarge,
    marginBottom: '5rem',
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
    },
  },
  imgContainerfirstApp: {
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
    marginBottom: '5rem',
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
    },
  },
}));
const ThirdSectionPostArkiv = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={6} className={classes.imgContainer}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3eTtexHHWFSuxx0_aszmu-TXkpCPV1v9fHSrrnR6oG2GD1xXhJ3s7aTDNjPS47hJCz4ZMI_lJ1qnALBxT7BR-pFb_BCefQKdxFqxoyTAX11cOTTRSQClDHyf_AB_KS4GTIEcPMzW1Z0ouqNmWTTCTiS=w1920-h1080-no?authuser=0"
          alt=""
        />
      </Grid>
      <Grid item lg={5} className={classes.textContainer}>
        <Typography>
          Første bilde er fra februar 2019, mye har blitt prøvd ut og forkastet
          siden da. UX og design har blitt forandret en del ganger.
        </Typography>
        <br />
        <Typography>
          Begrensninger i mine programmeringsferdigheter gjør også at jeg må gå
          over til mer studier før jeg kan fortsette.
        </Typography>
      </Grid>
      <Grid item lg={6} className={classes.imgContainer}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3eqOVDofDJVjdTreXkElrNkTDk-7OmrWeNNNw-fxBsojwgJgxdQ6g8gHf-_NKRqcqlcZrtTDvSJNkKjt7yrhEK59MgVJwF1MD48vZ7OIgb3nnazVmWMZafAeXvjcbjRFo-FDdt3hZbySUNEmAd1DB7-=w860-h578-no?authuser=0"
          alt=""
        />
        <Typography className={classes.imgText}>
          Her er det bare ringer og blader. Ideen om å lage en grafikkhylse bak
          ringene kom senere.
        </Typography>
      </Grid>
      <Grid item className={classes.textContainer} lg={6}>
        <Typography>Desember 2019 blir nok et prosjekt påbegynt.</Typography>
        <br />
        <Typography>
          Jeg publiserer appen på nettet og tester den på jobb. En del rettinger
          og forbedringer må til.
        </Typography>
        <br />
        <Typography>
          18 februar 2020 tas appen i bruk, også for andre som bygger poster.
          Denne appen har ikke noen database, dermed kan man ikke lagre og
          slette poster. Jeg kodet inn nye poster og publiserte på nytt hver
          gang nye poster ble lagt inn.
        </Typography>
        <br />
        <Typography>
          Teknologier som er brukt på denne appen er React, Next.js, Material ui
          appen er publisert med Vercel (tidligere Zeit)
        </Typography>
        <br />

        <Typography>
          Denne appen har ikke noen innlogging og hvem som helst kan se.
          <a target="_blank" href="https://mkv-calculator.ktl.now.sh">
            Her er en link til appen.
          </a>
        </Typography>
        <br />
        <Typography>
          Appen er ikke responsiv og virker ikke på mobil.
        </Typography>
        <br />
      </Grid>
      <Grid item lg={6} className={classes.imgContainerfirstApp}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3duoimCHAjHqwFsXy-32Z3tZV0_4cJmc_lSbUgiufK0XtJPd7Cjh-iXfrVHzsiXApJqsqp7RbgOuOBTcnmPOUZ9gwPx1wFFF-_evJ-iJaPTBfce8FJppAJMOAMDEpMMjrjXuw9ziHXoXWGQ8FuOoe95=w1920-h1080-no?authuser=0"
          alt=""
        />
        <Typography className={classes.imgText}>
          En tidlig utgave av appen.
        </Typography>
      </Grid>
      <Grid item lg={6} className={classes.imgContainerfirstApp}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3el4wBe1VA4b4gQbMaEQNLt2NqD_lBJgdGA0YJnw84xSgPY50DP9_9ffzyCYpB6Lgih8-S0i3w4R8jDyTEt77JKeEcs9BZULYeX9dVLsKIdasXJm2ks54prAaGDqxdq1wKusNQ1hmoWwmn9xG9TG3Q1=w1920-h1080-no?authuser=0"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default ThirdSectionPostArkiv;
