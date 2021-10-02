import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ArticlePadding from '../../config/ArticlePadding';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5rem',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '5rem',
  },
  imgMkv: {
    width: '100%',
  },
  imgText: {
    color: '#707070',
    fontStyle: 'italic',
  },
  imgMkvIllustration: {
    width: '100%',
    marginTop: '5rem',
  },
  mkvIllustrationContainer: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
      marginTop: '2rem',
    },
  },
  picture2Container: {
    marginTop: '5rem',
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
    },
  },
  postArkivExp: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
}));
const SixthSection = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item lg={6} xs={12} className={classes.postArkivExp}>
        <img
          className={classes.imgMkv}
          src="https://lh3.googleusercontent.com/pw/ACtC-3dLR5_XKs90055TC5zenxUCBxucsevgYSC2dl7biQzvq8mHy5Nbrs929zogM1LGvSIiGiji33hRZJsqTJOoJwy_jN4qTqoI2RxWKX_rICPTDqI38hhY0iXjx6dlz0JDSjKtbh0bTqFAxNy9Yx2Ie0la=w1440-h1080-no?authuser=0"
          alt="Bilde MKV"
        />
        <Typography className={classes.imgText} varinat="body1">
          Det ble mange permer og mye utskrifter til slutt.
        </Typography>

        <br />
        <Typography style={{ marginBottom: '2rem' }}>
          Tidligere ble alle poster skrevet ut på papir og sortert i permer. Det
          er 6 forskjellige bladtykkelser og det skilles også på tørkeprosent
          (12 og 18%), likevel ble det mange ark i de mest brukte permene. Da
          måtte man først finne rett perm og rett skilleark i permen og så bla
          gjennom alle arkene til du fant den rette. Mange ganger var ikke
          utskriften der enda og da måtte man gå å få den nye utskriften.
        </Typography>
      </Grid>
      <Grid item lg={6} className={classes.mkvIllustrationContainer}>
        <Typography variant="body1" style={{ marginBottom: '2rem' }}>
          Med program er det bare å søke etter det man skal ha uavhengig av hva
          der er. Alle filene ligger på et sted og filtreres etter søkeverdien.
          Hvis ikke posten eksisterer så er det enkelt og raskt å lage en ny
          post.
        </Typography>
        <img
          className={classes.imgMkv}
          src="https://lh3.googleusercontent.com/pw/ACtC-3ca-hzFSn-23lFiQOK52vm-LMN5bMG0Tr8zrrvZAuHsa-JiR6EGPvOIgxTXM86I20a7PoOpR2LJ1VBNP0CEmNIuiMdWtptC6n14QsWR94njAsJhSor-Ao0H7158iH7Bw_3Wfe6D8Gx55x7rCpvtqqCR=w1440-h1080-no?authuser=0"
          alt="Bilde MKV2"
        />
        {/* <Typography className={classes.imgText} variant="body1">
          En illustrasjon av et eksempel på en post.
        </Typography> */}
      </Grid>
      <Grid item lg={6} xs={12} className={classes.picture2Container}>
        <img
          className={classes.imgMkv}
          src="https://lh3.googleusercontent.com/pw/ACtC-3fYu_r8-ENiim6f3HQyVSVp8g6S31Sv2Tc3gJrhHRqoC1d8ARd4eDXewUaDNRzvv5S2QkVW5B8GNaIpiNLjWh3eXrLoZ6Vfhj6zo3c-W72Uo0Ze2XiJm_8_jG9dZ_wJ-yZ2iPQ3As8ZONLSCswNm6c9=w810-h1080-no?authuser=0"
          alt="Bilde MKV2"
        />
        <Typography className={classes.imgText} varinat="body1">
          Her ser du et eksempel på en utskrift (samme post som i illustrasjonen
          øverst). Utfyllingen bak er ikke forhåndsutregnet, men likevel så er
          utrgeningen bak det samme som programmet regner ut. Det skal totalt
          bak være 128.6. Så i noen tilfeller ble det riktig.
        </Typography>
      </Grid>
      <Grid item lg={6} xs={12} className={classes.picture2Container}>
        <img
          className={classes.imgMkv}
          src="https://lh3.googleusercontent.com/pw/ACtC-3eNWRmAbeUn7k_jAPoKrhwsOzrEIWbmUuwVF_aMeLlmazYuUnstJwoHzYWfGJ2gUgPLLjYuUSZNWoaQ4STdQ14aqT2wh7mhXOF44bgp1rdFq-Iq8U2gnGGjFoaVGhfHcpk9PQW9pv-_0pHAa1gCNPu3=w810-h1080-no?authuser=0"
          alt="Bilde MKV2"
        />
        <Typography className={classes.imgText} varinat="body1">
          Her er et annet eksempel, og her skal utfyllingen bak være 159.9 Det
          første alternativet her er 160.3 en differanse på 0.4mm. Det andre
          alternativet er 161.1 som er en differanse på 1.2 mm. Sånn blir det
          når man ikke vet hvilken verdi utfyllingen bak skal ha. og det blir
          vanskeligere og oppdage små feil før utfyllingen bak.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SixthSection;
