import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import PieChartRetip from './PieChartRetip';
import ListOfRetip from './ListOfRetip';
import Colors from '../../config/Colors';
import TypeInputListComponent from '../omlodding/TypeInputList';
import TypeInputRetip from './TypeInputRetip';
//import ServiceTilbake from './ServiceTilbake';

const useStyles = makeStyles((theme) => ({
  allChartContainer: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('xs')]: {},
  },
  container: {
    margin: '5rem 0',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('lg')]: {
      margin: '1rem',
    },

    [theme.breakpoints.down('xs')]: {
      margin: 0,
      width: '100vw',
    },
  },
  headerTypes: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '.9rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2rem',
    },
  },
  expContainer: {
    marginRight: '1rem',

    [theme.breakpoints.down('lg')]: {},
  },
  pieChart2container: {
    marginLeft: '8rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      marginLeft: '7rem',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      width: '100vw',
    },
  },
  retip0: {
    width: '4rem',
    height: '2rem',
    background: Colors.newBlades,
    borderRadius: '5px',
    [theme.breakpoints.down('lg')]: {
      width: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '2rem',
      height: '1rem',
    },
  },
  retip1: {
    width: '4rem',
    height: '2rem',
    background: Colors.blades1,

    borderRadius: '5px',
    [theme.breakpoints.down('lg')]: {
      width: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '2rem',
      height: '1rem',
    },
  },
  retip2: {
    width: '4rem',
    height: '2rem',
    background: Colors.blades2,

    borderRadius: '5px',
    [theme.breakpoints.down('lg')]: {
      width: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '2rem',
      height: '1rem',
    },
  },
  retip3: {
    width: '4rem',
    height: '2rem',
    background: Colors.blades3,

    borderRadius: '5px',
    [theme.breakpoints.down('lg')]: {
      width: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '2rem',
      height: '1rem',
    },
  },
  retip4: {
    width: '4rem',
    height: '2rem',
    background: Colors.blades4,

    borderRadius: '5px',
    [theme.breakpoints.down('lg')]: {
      width: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '2rem',
      height: '1rem',
    },
  },
  retip5: {
    width: '4rem',
    height: '2rem',
    background: Colors.blades5,

    borderRadius: '5px',
    [theme.breakpoints.down('lg')]: {
      width: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '2rem',
      height: '1rem',
    },
  },
  ServiceTilbakeContainer: {
    marginTop: '15rem',
    marginBottom: '10rem',
  },
  text: {
    [theme.breakpoints.down('lg')]: {
      fontSize: '.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '.5rem',
    },
  },
}));
const OmloddingMainPage = ({
  allBlades,
  updateBlades,
  serviceSort0,
  serviceSort1,
  serviceSort2,
  serviceSort3,
  serviceSort4,
  serviceSort5,
  setgetTypeRetip,
  getTypeRetip,
  numberOfBlades,
  sortedBlades,
  sortedBladesService,
  serviceCountYear,
  sortedBladesServiceThisMonth,
  serviceCountMonth,
}) => {
  const [retip0, setRetip0] = useState('');
  const [retip1, setRetip1] = useState('');
  const [retip2, setRetip2] = useState('');
  const [retip3, setRetip3] = useState('');
  const [retip4, setRetip4] = useState('');
  const [retip5, setRetip5] = useState('');

  useEffect(() => {
    if (allBlades) {
      setRetip0(allBlades.filter((blade) => blade.performer.length === 0));
      setRetip1(allBlades.filter((blade) => blade.performer.length === 1));
      setRetip2(allBlades.filter((blade) => blade.performer.length === 2));
      setRetip3(allBlades.filter((blade) => blade.performer.length === 3));
      setRetip4(allBlades.filter((blade) => blade.performer.length === 4));
      setRetip5(allBlades.filter((blade) => blade.performer.length >= 5));
    }
  }, [allBlades]);
  const sortedBladesFiltered =
    sortedBlades &&
    sortedBlades.filter((item) => item._id.type === getTypeRetip);

  const classes = useStyles();
  return (
    <Grid container className={classes.container} direction="row">
      <Grid item>
        <Grid
          container
          direction="column"
          className={classes.allChartContainer}
        >
          <Typography variant="h4" className={classes.headerTypes}>
            Omloddinger på {getTypeRetip} (
            {sortedBladesFiltered &&
              sortedBladesFiltered.map((item) => item.typeCount)}
            )
          </Typography>
          <Grid item>
            <ListOfRetip
              serviceSort0={serviceSort0}
              serviceSort1={serviceSort1}
              serviceSort2={serviceSort2}
              serviceSort3={serviceSort3}
              serviceSort4={serviceSort4}
              serviceSort5={serviceSort5}
            />
          </Grid>

          <Grid item>
            <Grid container>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  className={classes.expContainer}
                >
                  <Grid item className={classes.retip0}></Grid>
                  <Grid item>
                    <Typography className={classes.text}>Nye blad</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  className={classes.expContainer}
                >
                  <Grid item className={classes.retip1}></Grid>
                  <Grid item>
                    <Typography className={classes.text}>1 gang</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  className={classes.expContainer}
                >
                  <Grid item className={classes.retip2}></Grid>
                  <Grid item>
                    <Typography className={classes.text}>2 ganger</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  className={classes.expContainer}
                >
                  <Grid item className={classes.retip3}></Grid>
                  <Grid item>
                    <Typography className={classes.text}>3 ganger</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  className={classes.expContainer}
                >
                  <Grid item className={classes.retip4}></Grid>
                  <Grid item>
                    <Typography className={classes.text}>4 ganger</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  className={classes.expContainer}
                >
                  <Grid item className={classes.retip5}></Grid>
                  <Grid item>
                    <Typography className={classes.text}>
                      5 {'>'} ganger
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <TypeInputRetip setgetTypeRetip={setgetTypeRetip} />
          <Typography>Velg sagblad</Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.pieChart2container}>
        <Grid item>
          <Typography variant="h4" className={classes.headerTypes}>
            Antall omloddinger alle blad (
            {numberOfBlades && numberOfBlades.map((item) => item.sagblad)})
          </Typography>
        </Grid>
        <PieChartRetip
          retip0={retip0.length}
          retip1={retip1.length}
          retip2={retip2.length}
          retip3={retip3.length}
          retip4={retip4.length}
          retip5={retip5.length}
          allBlades={allBlades}
        />
        <Typography>Ytre ring er prosent og indre er antall</Typography>
      </Grid>
      {/* <Grid item lg={12} className={classes.ServiceTilbakeContainer}>
        <ServiceTilbake
          sortedBladesService={sortedBladesService}
          serviceCountYear={serviceCountYear}
          sortedBladesServiceThisMonth={sortedBladesServiceThisMonth}
          serviceCountMonth={serviceCountMonth}
        />
      </Grid> */}
    </Grid>
  );
};

export default OmloddingMainPage;
