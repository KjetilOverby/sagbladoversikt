import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderComponent from '../components/common/HeaderComponent';
import FooterComponent from '../components/common/FooterComponent';
import PostArkivStartPage from '../components/postarkiv/PostArkivStartPage';

const useStyles = makeStyles((theme) => ({
  background: {
    background:
      'linear-gradient(rgba(256,256,256,.7), rgba(256,256,256,.8)), url("https://images.unsplash.com/photo-1542621334-a254cf47733d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
    backgroundSize: 'cover',
    minHeight: '100vh',
    backgroundAttachment: 'fixed',
  },
}));
const postarkiv = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <HeaderComponent />
      <PostArkivStartPage />
      <FooterComponent />
    </div>
  );
};

export default postarkiv;
