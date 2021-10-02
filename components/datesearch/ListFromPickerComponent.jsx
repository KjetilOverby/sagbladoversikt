import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';

const WasteListFromPicker = ({ title, list, background, icon, count }) => {
  const useStyles = makeStyles((theme) => ({
    count: {
      color: '#555454',
    },
    divider: {
      margin: '.5rem 0',
    },
    header: {
      margin: '1rem 0 2rem 0',
      color: '#5d5e5e',
    },

    listContainer: {},
    mainContainer: {
      //background: background,
      width: '22rem',
      padding: '1rem',
      // borderRadius: '10px',
      marginRight: '5rem',
      // minHeight: '30rem',
    },
    type: {
      width: '15rem',
      color: '#6d6d6d',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Grid container direction="column">
        <Grid item>
          <Typography className={classes.header} variant="body1">
            {title} ({count && count})
          </Typography>
        </Grid>
        <Grid xs={12} item className={classes.listContainer}>
          {list &&
            list.map((item) => {
              return (
                <>
                  <Grid container>
                    <Grid item>{icon}</Grid>
                    <Grid item>
                      <Typography className={classes.type}>
                        {item._id.type}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.count}>
                        {item.typeCount}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider className={classes.divider} />
                </>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
};

export default WasteListFromPicker;
