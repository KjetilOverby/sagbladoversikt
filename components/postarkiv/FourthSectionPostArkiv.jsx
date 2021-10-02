import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ArticlePadding from '../../config/ArticlePadding';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
    },
  },
  Lastcontainer: {
    padding: ArticlePadding.paddingLarge,
    marginTop: '10rem',
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
      marginTop: '2rem',
    },
  },
  img: {
    width: '100%',
    marginBottom: '2rem',
  },
  img2: {
    width: '100%',
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '4rem',
    },
  },
  img3: {
    width: '100%',
    marginTop: '0rem',
  },
  imgContainer: {
    padding: ArticlePadding.paddingLarge,
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
    },
  },
  imgLastContainer: {
    padding: ArticlePadding.paddingLarge,
    marginTop: '10rem',
    [theme.breakpoints.down('xs')]: {
      padding: ArticlePadding.paddingMobile,
      marginTop: '4rem',
    },
  },
  imgText: {
    color: '#707070',
    fontStyle: 'italic',
  },
}));
const FourthSectionPostArkiv = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={6} className={classes.container}>
        <Typography variant="body1">
          Den første utgaven av Postarkiv var ikke responsiv, dvs at den er
          ubrukelig på mindre skjermer som mobiler og nettbrett. Dette ville jeg
          gjøre noe med. Jeg gjorde et forsøk på å implementere det i den første
          utgaven av Postarkiv. Men fant fort ut at når det ikke er gjort fra
          begynnelsen så ble det mer jobb å bli ferdig med den enn å begynne
          helt på nytt.
        </Typography>
        <br />
        <Typography variant="body1">
          Jeg hadde ikke så mye erfaring enda på den første appen så det ble
          litt rotete struktur og litt "spaghettikode" som det gjerne blir kalt.
          Men appen fungerer som den skal og sluttbrukeren vil ikke merke noe
          til det, men den som skal vedlikeholde koden og eventuelt legge til
          noe nytt får en kjempejobb hvis det er dårlig struktur i kildekoden.
        </Typography>
        <br />
        <Typography variant="body1">
          Etter at jeg hadde begynt med den nye appen så lærer jeg litt om
          backend koding også, for å bruke databaser blant annet. Jeg bestemmer
          meg for å koble til en database så man kan lage nye poster å lagre dem
          rett fra programmet. Da må jeg også få på plass innlogging for å unngå
          at uautoriserte får tilgang til manipulering av data.
        </Typography>
      </Grid>
      <Grid item lg={6} className={classes.imgContainer}>
        <img
          className={classes.img}
          src="https://lh3.googleusercontent.com/pw/ACtC-3dNO8IHStCy9kEHOe0Si20cRI2PsVM3GUae93xRgpH6c_2zPGIj2UeDnQu6bOaCsf_CFrFSnCIVohmwtaWitx8VKQ_gPj1APtuCGTSs2umrhdLmlE4fcwzF2mojSXjo5wm76_3SHjbRNPH8_OKdCyX_=w1920-h1080-no?authuser=0"
          alt="bilde forside"
        />
      </Grid>
      <Grid item lg={12} className={classes.imgContainer}>
        <img
          className={classes.img2}
          src="https://lh3.googleusercontent.com/pw/ACtC-3dTnnrWwHy02P5yNwkZY7casEE6N4BhhUIrJqEGrBelPPpNStkM8wapEtZ4jm6x6Yun0L5_xJ41D8fXuM4Jp3ghVIFkGNukSB_TwVhdbwzUAzTdPgN03PzqjNVyOzX4eueguP-7rKBlJ-hsiao_6v5V=w1920-h1080-no?authuser=0"
          alt=""
        />
        <Typography className={classes.imgText}>
          På bildet så er de blå ringene utfyllingsringer og de gule er det som
          blir til plank. Verdiene som står øverst på bladet er sagsnittet og
          nederst er bladstammetykkelsen. Verdien med den blå skriften mellom
          bladene er det som er råmålet på planktykkelsen. Det nominelle målet
          står i overskriften øverst til venstre(38). Alle mål er i mm.
        </Typography>
      </Grid>
      <Grid item lg={12} className={classes.imgContainer}>
        <img
          className={classes.img2}
          src="https://lh3.googleusercontent.com/pw/ACtC-3fJAaneYKW3oYe8jzQNJEUhp0muJpWGET3c8DjXt1a-dq6ak5tOUHP4oKYxcohvwRN9XVF2W-yvMrY8K2ymgLVRJtGWZNZdQd_HiO0VnNyX0SDDcciZxOXPEPp4WkV5_OIghpQ0HCZRwM9BWmYUZlCN=w1920-h1080-no?authuser=0"
          alt=""
        />
        <Typography className={classes.imgText}>
          Her kan man lage en ny post. Man legger inn råmålet som skal være på
          planken og da vil programmet regne ut verdien på utfylling foran og
          bak. Når alle planker er lagt til så må man dele opp summene på
          utfyllingene med ringer som vi har.
        </Typography>
      </Grid>
      <Grid item lg={6} className={classes.imgLastContainer}>
        <img
          className={classes.img3}
          src="https://lh3.googleusercontent.com/pw/ACtC-3eGTOQ6rqQ_NRL0yvLZjcZ3FsSTPv-X4ZcjzyLXPfI2zbac-SBkLnVKnI367HUdxDD2NvU1vqXt1zfT09W1vFCGi8F1t3cPZ7RNXj1CpUjhpbpRQFQIMNaUG4CgToYubQdBqjPxTN64nvoWDz3xvIJ1=w1440-h1080-no?authuser=0"
          alt=""
        />
        <Typography className={classes.imgText}>
          På bildet ser du at posten har blitt dratt til med to muttere og at de
          flykter med hylsa.
        </Typography>
      </Grid>
      <Grid item lg={6} className={classes.Lastcontainer}>
        <Typography>
          Som tidligere nevnt så regner programmet ut utfylling både foran og
          bak. Det er utfyllingen foran som er viktig for den bestemmer om
          posten kommer i midten eller ikke. Utfyllingen bak er bare til å fylle
          ut så man får dratt til posten med muttere. Så lenge man får dratt til
          så spiller det ingen rolle hva man har brukt i utfyllingen bak, da den
          ikke påvirker postens posisjon.
        </Typography>
        <br />
        <Typography>
          Poenget med å få bakfyllingen ferdig utregnet er at utregningen regner
          ut presist slik at siste mutter som skrus igjen flykter helt jevnt med
          enden på hylsa. Dette er en indikasjon på at posten er riktig bygd med
          så å si 100% sikkerhet. Hvis siste mutter enten rekker lenger utenfor
          eller innefor kanten på hylsa så er det noe som er feil og man få
          fikset opp i det før posten blir installert i saga
        </Typography>
        <br />
        <Typography>
          Det gamle systemet på ark så var det ikke utregnet utfylling bak.
          Regne ut manuelt er tungvint og man må også vite hvordan man gjør det.
          Løsningen på det var å finne frem ringer som passet så man fikk dratt
          igjen posten. Siste mutter kunne like gjerne stikke litt utenfor eller
          innfor ved å gjøre det sånn. Har du da bygd med feil ring på en
          millimeter eller 2 så vil du ikke oppdage det så lett nå du ikke har
          noen anelse om hvor siste mutter egentlig skal være. En feil bygd post
          som havner i saga betyr masse ekstraarbeid og produksjonsstopp.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FourthSectionPostArkiv;
