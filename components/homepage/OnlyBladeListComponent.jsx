import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

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
    width: '20rem',
  },
}));

export default function OnlyBladesListComponent({
  sawbladeCountList,
  numberOfBlades,
}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Table size="small" style={{ marginTop: '3rem' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              Bladtype ({sawbladeCountList && sawbladeCountList.length}){' '}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sawbladeCountList &&
            sawbladeCountList.map((item) => {
              return (
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    {item._id.type}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}
