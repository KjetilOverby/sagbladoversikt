import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderComponent from '../components/common/HeaderComponent';
import AboutMainPage from '../components/about/AboutMainPage';
import FooterComponent from '../components/common/FooterComponent';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background:
      'linear-gradient(rgba(256,256,256,.8), rgba(256,256,256,.8)), url("https://images.unsplash.com/photo-1504717052790-edee6b85829b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
}));
const about = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <HeaderComponent />
      <AboutMainPage />
      <FooterComponent /> */}
    </div>
  );
};

export default about;
