import React from 'react';
import { Container, Grid, Hidden, makeStyles } from '@material-ui/core';
import HeaderComponent from '../common/HeaderComponent';
import Tabell from './Tabell';
import TabellNominell from './TabellNominell';
import TabellWaste from './TabellWaste';
import TabellNew from './TabellNew';
import TabellService from './TabelService';
import OnlyBladesListComponent from './OnlyBladeListComponent';
import LineBalanceChart from './LineBalanceChart';
import TableForMobile from './TableForMobile';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
   
    [theme.breakpoints.down('lg')]: {
      width: '80rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
  linChartContainer: {
    display: ' flex',
    justifyContent: 'center',
    marginTop: '-15rem',
    [theme.breakpoints.down([1999])]: {
      marginTop: '-30rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '-8rem',
    },
  },
  tableContainer: {
    margin: ' 1rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0',
    },
  },
  tableSubContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  loadingContainer: {
    flexGrow: 1
  }
}));
const HomePageComponent = ({
  sawbladeCountList,
  wasteSortTable,
  newSortTable,
  serviceSortTable,
  numberOfBlades,
}) => {
  const classes = useStyles();
  return (
    <>
    {sawbladeCountList && serviceSortTable && newSortTable ? 
    
      <Grid container direction="column" className={classes.container}>
        <Grid item className={classes.tableContainer}>
          <Grid container direction="row" className={classes.tableSubContainer}>
            <Grid item xl={3} lg={4} sm={3} xs={5}>
              <Tabell
                sawbladeCountList={sawbladeCountList}
                numberOfBlades={numberOfBlades}
              />
            </Grid>
            {/* <Hidden mdUp>
            <Grid item xs={6}>
              <OnlyBladesListComponent sawbladeCountList={sawbladeCountList} />
            </Grid>
          </Hidden> */}
            <Grid item xl={1} lg={2} sm={3} xs={5}>
              <TabellNominell />
            </Grid>

            <Grid item xl={1} lg={2} xs={5}>
              <TabellWaste wasteSortTable={wasteSortTable} />
            </Grid>

            <Grid item xl={1} lg={2} xs={5}>
              <TabellNew newSortTable={newSortTable} />
            </Grid>

            <Grid item xl={1} lg={2} xs={5}>
              <TabellService serviceSortTable={serviceSortTable} />
            </Grid>
          </Grid>
        </Grid>

        <Hidden lgUp>
          <TableForMobile
            sawbladeCountList={sawbladeCountList}
            serviceSortTable={serviceSortTable}
            newSortTable={newSortTable}
            wasteSortTable={wasteSortTable}
            numberOfBlades={numberOfBlades}
          />
        </Hidden>
        <Grid item lg={12} className={classes.linChartContainer}>
          <LineBalanceChart
            newSortTable={newSortTable}
            wasteSortTable={wasteSortTable}
          />
        </Grid>
      </Grid> : <div className={classes.loadingContainer}><h1>Laster data...</h1></div>
  }
    </>
  );
};

export default HomePageComponent;
