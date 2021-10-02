import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import Copyright from "../../src/Copyright";
import Link from "next/link";
import Cube from "./Cube";

const useStyles = makeStyles((theme) => ({}));
const LoginMainPage = () => {
  const classes = useStyles();

  const [selectAllFront, setSelectAllFront] = useState("");
  const [selectAllBottom, setSelectAllBottom] = useState("");
  const [selectAllLeft, setSelectAllLeft] = useState("");
  const [selectAllRight, setSelectAllRight] = useState("");
  const [selectAllTop, setSelectAllTop] = useState("");
  const [selectAllBack, setSelectAllBack] = useState("");
  const selectAll = () => {
    if (
      selectAllFront === "" &&
      selectAllBottom === "" &&
      selectAllLeft === "" &&
      selectAllRight === "" &&
      selectAllTop === "" &&
      selectAllBack === ""
    ) {
      setSelectAllFront("select-all-front");
      setSelectAllBottom("select-all-bottom");
      setSelectAllLeft("select-all-left");
      setSelectAllRight("select-all-right");
      setSelectAllTop("select-all-top");
      setSelectAllBack("select-all-back");
    } else {
      setSelectAllFront("");
      setSelectAllBottom("");
      setSelectAllLeft("");
      setSelectAllRight("");
      setSelectAllTop("");
      setSelectAllBack("");
    }
  };
  return (
    <div className="container">
      <h2 className="header1">Sliperi Moelven Våler</h2>
      <img
        onClick={selectAll}
        className="logo"
        src="https://www.aaboevensen.com/hubfs/moelven_r.png"
        alt=""
      />
      {/*  <h1 className="header2">Sagbladregister</h1> */}
      <Cube
        selectAllFront={selectAllFront}
        selectAllBottom={selectAllBottom}
        selectAllLeft={selectAllLeft}
        selectAllRight={selectAllRight}
        selectAllTop={selectAllTop}
        selectAllBack={selectAllBack}
      />
      <h3 className="header3">Sagbladoversikt VS-66 og MKV</h3>
      <div>
        <Link href="/homepage">
          <button className="button">Login</button>
        </Link>
      </div>
      <div className="copy-container">
        <Copyright />
      </div>
    </div>
  );
};

export default LoginMainPage;
