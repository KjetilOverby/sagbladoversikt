import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import LogoLogin from "./LogoLogin";
import Copyright from "../../src/Copyright";
import Link from "next/link";
import Explain from "./Explain";

const useStyles = makeStyles((theme) => ({
  background: {
    background:
      'linear-gradient(rgba(256,256,256,.9), rgba(15,11,211,.5)), url("https://lh3.googleusercontent.com/pw/ACtC-3enDB1-79fEUV9Qwptu7w2Wx4HaGJwO-s4ZLViBmBtqT12m1F911IPd_Jotl0bxbc4npU7IPsew7gaemdB8yQn2RbiaU_Z19hAiBbpCK14MP0bHKHUZWLiZZexjkpyErGsiB7eqfKWnjh19u0SQKMQ=w1919-h1080-no?authuser=0")',
    height: "100vh",
    marginTop: "0",
    backgroundSize: "cover",
  },
  button: {
    marginTop: "2rem",
    width: "28rem",
    background: "#4562ac",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      width: "17rem",
    },
  },
  container: {
    paddingTop: "5rem",
  },
  header: {
    color: "#365ec4",
  },
}));
const LoginMainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container maxWidth="lg" className={classes.container}>
        <Box my={4}>
          <Typography
            className={classes.header}
            variant="h4"
            component="h1"
            gutterBottom
          >
            Sagbladregister
          </Typography>

          <Explain />
        </Box>
        <LogoLogin />
        <Copyright />
        <Link href="/homepage" color="secondary">
          <Button variant="contained" className={classes.button}>
            Login
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default LoginMainPage;
