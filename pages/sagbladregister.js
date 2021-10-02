import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderComponent from '../components/common/HeaderComponent';
import SagbladregisterStartPage from '../components/sagbladregister/SagbladregisterStartPage';
import FooterComponent from '../components/common/FooterComponent';

const useStyles = makeStyles((theme) => ({
  background: {
    background:
      'linear-gradient(rgba(256,256,256,.8), rgba(256,256,256,.9)), url("https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: 'cover',
    minHeight: '100vh',
    backgroundAttachment: 'fixed',
  },
}));
const sagbladregister = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <HeaderComponent />
      <SagbladregisterStartPage />
      <FooterComponent />
    </div>
  );
};

export default sagbladregister;
