import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import OmloddingMainPage from '../components/omlodding/OmloddingMainPage';
import HeaderComponent from '../components/common/HeaderComponent';
import FooterComponent from '../components/common/FooterComponent';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',

    background:
      'linear-gradient(rgba(256,256,256,.4), rgba(256,256,256,.7)), url("https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: 'cover',

    backgroundAttachment: 'fixed',
  },
}));
const omlodding = ({
  sortedBlades,
  serviceSort0,
  serviceSort1,
  serviceSort2,
  serviceSort3,
  serviceSort4,
  serviceSort5,
  getTypeRetip,
  setgetTypeRetip,
  allBlades,
  numberOfBlades,
  sortedBladesService,
}) => {
  const classes = useStyles();
  const update = () => {
    setUpdate(Math.random());
  };
  return (
    <div className={classes.container}>
      <HeaderComponent />

      <OmloddingMainPage
        sortedBlades={sortedBlades}
        serviceSort0={serviceSort0}
        serviceSort1={serviceSort1}
        serviceSort2={serviceSort2}
        serviceSort3={serviceSort3}
        serviceSort4={serviceSort4}
        serviceSort5={serviceSort5}
        getTypeRetip={getTypeRetip}
        setgetTypeRetip={setgetTypeRetip}
        allBlades={allBlades}
        numberOfBlades={numberOfBlades}
        sortedBladesService={sortedBladesService}
      />
      <FooterComponent />
    </div>
  );
};

export default omlodding;
