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
    },
  },
}));
const FirstSectionRegister = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item lg={6} xs={12} className={classes.textContainer}>
        <Typography variant="body1">
          Når sagbladene er slipt så mange ganger at det ikke er igjen noe
          hardmetall tenner så sendes bladene til omlodding. Restene av de gamle
          fjernes og nye hardmetallklosser loddes på. Etter 3-5 ganger med
          omlodding så er stammen på sagbladene slitne og ustabile i saga. I
          sagbladsortimentet vi har så er det flere hundre blad og for å ha
          kontroll på hvor mange ganger et blad er omloddet så må man ha et
          system.
        </Typography>
        <br />
        <Typography variant="body1">
          Et system som er blitt brukt er å gravere inn et kryss hver gang det
          har vært på omlodding. Men dette viser ikke når et blad ble omloddet
          sist. Den informasjonen har vi noen ganger hatt bruk for hvis det er
          noe feil med service på et parti fra leverandør, spesielt når vi
          brukte 2 leverandører. Da kan vi finne ut når de ble omloddet sist og
          hvem som har omloddet de. Og se hvilke andre blad som er fra samme
          parti.
        </Typography>
        <br />
        <Typography variant="body1">
          For å løse dette så tenkte jeg på å få dette i en database for jeg
          hadde lagt merke til at bladene vi kjøper fra japanske Kanefusa har et
          id nummer. Da kan jeg bruke det nummeret til å registrere de i en
          database.
        </Typography>
      </Grid>
      <Grid item lg={6} xs={12} className={classes.textContainer}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3faVo4sr78T7SW1RQs34TsbHlFsszmFXq-cTnUxKrkAD7EN4UYxxGzwVkbfD6plwKVnPqUvMmmKg9UdKQU7r61Qqm2pTnqVvXzQ3tVysOz4GASnw81Lv93TEBP_HKdUkidKhn4Q-_fTv_5h3k4reH9v=w1440-h1080-no?authuser=0"
          alt=""
        />
        <Typography className={classes.imgText}>
          På sagbladet er det merket med informasjon om bladet og et unikt id
          nummer.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FirstSectionRegister;
