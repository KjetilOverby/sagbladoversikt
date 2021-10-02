import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import HomePageComponent from '../components/homepage/HomePageComponent';
import FooterComponent from '../components/common/FooterComponent';
import HeaderComponent from '../components/common/HeaderComponent';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
const homepage = ({
  sawbladeCountList,
  wasteSortTable,
  newSortTable,
  serviceSortTable,
  numberOfBlades,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <HeaderComponent />

      <HomePageComponent
        sawbladeCountList={sawbladeCountList}
        wasteSortTable={wasteSortTable}
        newSortTable={newSortTable}
        serviceSortTable={serviceSortTable}
        numberOfBlades={numberOfBlades}
      />
      <FooterComponent />
    </div>
  );
};

export default homepage;
