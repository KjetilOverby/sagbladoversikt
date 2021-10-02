import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Explain from '../components/LoginScreen/Explain';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import LogoLogin from '../components/LoginScreen/LogoLogin';
import { Button, makeStyles } from '@material-ui/core';
import LoginMainPage from '../components/loginscreen2/LoginMainPage';

export default function Index() {
  const useStyles = makeStyles((theme) => ({}));
  const classes = useStyles();
  return (
    <div>
      <LoginMainPage />
    </div>
  );
}
