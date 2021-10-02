import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: '1rem',
    fontStyle: 'italic',
    color: '#727272',
    fontSize: '1.2rem',
  },
  returnedThisYearContainer: {
    marginRight: '15rem',
  },
  typeTextContainer: {
    width: '15rem',
  },
}));
const ServiceTilbake = ({
  sortedBladesService,
  serviceCountYear,
  sortedBladesServiceThisMonth,
  serviceCountMonth,
}) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item className={classes.returnedThisYearContainer}>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.header} variant="h5">
              Fått tilbake etter service i år. ({serviceCountYear.length})
            </Typography>
          </Grid>
          <Grid item>
            {sortedBladesService &&
              sortedBladesService.map((item) => {
                return (
                  <Grid container>
                    <Grid item>
                      <Typography className={classes.typeTextContainer}>
                        {item._id.type}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{item.typeCount}</Typography>
                    </Grid>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.header} variant="h5">
              Fått tilbake etter service Denne måneden. (
              {serviceCountMonth.length})
            </Typography>
          </Grid>
          <Grid item>
            {sortedBladesServiceThisMonth &&
              sortedBladesServiceThisMonth.map((item) => {
                return (
                  <Grid container>
                    <Grid item>
                      <Typography className={classes.typeTextContainer}>
                        {item._id.type}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{item.typeCount}</Typography>
                    </Grid>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServiceTilbake;
