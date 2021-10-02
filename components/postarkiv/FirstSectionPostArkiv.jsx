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
const FirstSectionPostArkiv = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item lg={6} xs={12} className={classes.postArkivExp}>
        <img
          className={classes.imgMkv}
          src="https://lh3.googleusercontent.com/pw/ACtC-3eclM-WdgxK7tgIkEJ99KiD0N7skgQVVOlRgJE3wqcaooMYOjtonfzCWFidki-8H9iTu4UJeBkB1WjEgpoV2EkRn-mZwlMl9KXwvz-JKsSNYqdRBi385-Mk8uHuJxeAtDpPMBlx86dcV3aKfboS8ZA_=w1440-h1080-no?authuser=0"
          alt="Bilde MKV"
        />
        <Typography className={classes.imgText} varinat="body1">
          Saga har 2 akslinger. Sagbladene stilles inn så de skjærer halvparten
          hver med litt overlapp. Begge postene bygges likt med eksakt utregning
          og blokka havner akkurat i sentrum av postene.
        </Typography>

        <br />
        <Typography style={{ marginBottom: '2rem' }}>
          Postarkiv er et program til å regne ut utfylling for å få sentrert
          posten på en hylse. Man legger inn hvilke tykkelser plankene skal ha,
          hvilke sagbladtykkelse man skal bruke og da regner programmet
          automatisk ut hva utfyllinge foran blir for å sentrere posten. Også
          utfylling bak sånn at mutterne som skal dras igjen havner på akkurat
          det samme stedet uansett hvilke dimensjoner som er lagt inn.
        </Typography>
      </Grid>
      <Grid item lg={6} className={classes.mkvIllustrationContainer}>
        <Typography varinat="body1">
          Illustrasjonen under viser et eksempel på en post som har 4
          sentrumsplanker. Plankenetykkelsen skal være 38mm. Det brukes
          overmål(råmål) fordi plankene krymper når de blir tørket. Det må også
          tas hensyn sagbladtykkelse og sagsnitt (vigg) når man skal regne ut
          postene. Vi har i dag 6 ulike bladtykkelser.
        </Typography>
        <img
          className={classes.imgMkvIllustration}
          src="https://lh3.googleusercontent.com/pw/ACtC-3evHu7H4tJYNZG1m6Wm7kSA1qLrPIWmxIYRV51O1EhQ92mnnCT984GD86hekd7lQwQb2rYhrDH-0bpkU6rZbDTcVaYfnQNYVsP_4GU-xvhVkeh2YDipIKpW6XhLNnXJPggSWgV8AjEyM6qZuvMcyQrQ=w1046-h1080-no?authuser=0"
          alt=""
        />
        {/* <Typography className={classes.imgText} variant="body1">
          En illustrasjon av et eksempel på en post.
        </Typography> */}
      </Grid>
      <Grid item lg={6} xs={12} className={classes.picture2Container}>
        <img
          className={classes.imgMkv}
          src="https://lh3.googleusercontent.com/pw/ACtC-3dsrXOSzQZWMDWlPxcYRZ_I-JRnwgYJ6CFZxqbBp22O2xKOEPKBcrI48j_AidR7HjlBDvjmdUQgxUyePH4Rg6DxNcIuHBc19wn79UwuaEp0HQq8V58jDpdJLTq0wK6fKv3BfywCD2WQngNz19Q0_5LN=w1440-h1080-no?authuser=0"
          alt="Bilde MKV2"
        />
        <Typography className={classes.imgText} varinat="body1">
          En ferdigbygd post som tar ut to planker, i de fleste tilfeller så tas
          det ut sidebord på utsiden av bladene.
        </Typography>
      </Grid>
      <Grid item lg={6} xs={12} className={classes.picture2Container}>
        <img
          className={classes.imgMkv}
          src="https://lh3.googleusercontent.com/pw/ACtC-3ciLgSwIchXTUArkYWhGF21jtYm1pl6QoOEENMhSsy0wUkTx_SpLPTqtpkuDJJSYA8wTbOksPbYadJJv7FPVTQO9l7Xy_q6sGgEJX-zDgm5BPZuFl287ggQ0xUca_69Luu76_BMTnJQDcBkefH_BNXK=w1440-h1080-no?authuser=0"
          alt="Bilde MKV2"
        />
        <Typography className={classes.imgText} varinat="body1">
          Her er ringer til å bygge poster med.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FirstSectionPostArkiv;
