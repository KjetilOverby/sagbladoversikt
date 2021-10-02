import React from 'react';
import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import AboutSection from './AboutSection';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  header: {
    margin: '5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
    },
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
const AboutMainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <Typography className={classes.header} variant="h4">
          Om nettsiden
        </Typography>
      </div>
      <Container>
        <Grid container>
          <Grid item>
            <AboutSection />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutMainPage;
