import React from "react";
import { makeStyles } from "@material-ui/core";
import DateSearchMainPage from "../components/datesearch/DateSearchMainPage";
import HeaderComponent from "../components/common/HeaderComponent";
import FooterComponent from "../components/common/FooterComponent";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",

    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
}));
const datesearch = ({
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  wasteListFromPicker,
  wasteCountListFromPicker,
  purchaseListFromPicker,
  newbladeCountListFromPicker,
  serviceListFromPicker,
  serviceCountListFromPicker,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HeaderComponent />
      <DateSearchMainPage
        setStartDate={setStartDate}
        startDate={startDate}
        setEndDate={setEndDate}
        endDate={endDate}
        wasteListFromPicker={wasteListFromPicker}
        wasteCountListFromPicker={wasteCountListFromPicker}
        purchaseListFromPicker={purchaseListFromPicker}
        newbladeCountListFromPicker={newbladeCountListFromPicker}
        serviceListFromPicker={serviceListFromPicker}
        serviceCountListFromPicker={serviceCountListFromPicker}
      />
      <FooterComponent />
    </div>
  );
};

export default datesearch;
