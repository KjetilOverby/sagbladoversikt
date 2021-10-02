import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Hidden, Typography } from "@material-ui/core";
import OnlyBladesListComponent from "./OnlyBladeListComponent";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tableCell: {
    background: "#f4f8f8",
  },
  tableContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
    },
  },
  tableContainerMobile: {
    width: "100vw",
  },
}));
const nominell = [20, 20, 50, 50, 30, 50, 25, 25, 25, 25, 25, 25, 25];
const bladeTypes = [
  "Kanefusa 2.2-3.6",
  "Kanefusa 2.4-3.8",
  "Kanefusa 2.6-4.0",
  "Kanefusa 2.8-4.2",
  "Kanefusa 3.0-4.4",
  "Kanefusa 3.2-4.6",
  "Kanefusa N-blad",
  "Kanefusa VS-66 høyre",
  "Kanefusa VS-66 høyre F",
  "Kanefusa VS-66 ventre",
  "Kanefusa VS-66 venstre F",
  "Nessjø VS-66 høyre",
  "Nessjø VS-66 venstre",
];
const nominelSum = nominell.reduce((a, b) => a + b, 0);

export default function TabellNominell() {
  const classes = useStyles();

  const mobile = (
    <>
      <Typography style={{ color: "transparent" }} variant="h6">
        Invisible text
      </Typography>

      <Table size="small" className={classes.tableContainerMobile}>
        <TableHead>
          <TableRow>
            <TableCell>Nominell ({nominelSum})</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[0]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[0]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[1]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[1]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[2]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[2]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[3]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[3]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[4]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[4]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[5]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[5]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[6]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[6]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[7]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[7]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[8]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[8]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>{bladeTypes[9]}</TableCell>
            <TableCell className={classes.tableCell}>{nominell[9]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>
              {bladeTypes[10]}
            </TableCell>
            <TableCell className={classes.tableCell}>{nominell[10]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>
              {bladeTypes[11]}
            </TableCell>
            <TableCell className={classes.tableCell}>{nominell[11]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableCell}>
              {bladeTypes[12]}
            </TableCell>
            <TableCell className={classes.tableCell}>{nominell[12]}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );

  return (
    <React.Fragment>
      <Hidden mdDown>
        <Typography style={{ color: "transparent" }} variant="h6">
          Invisible text
        </Typography>

        <Table size="small" className={classes.tableContainer}>
          <TableHead>
            <TableRow>
              <TableCell>Nominell ({nominelSum})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nominell.map((item) => {
              return (
                <TableRow>
                  <TableCell className={classes.tableCell}>{item}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Hidden>
    </React.Fragment>
  );
}
