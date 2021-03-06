import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid, Hidden, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '1rem',
    color: '#18a228',
    marginRight: '10rem',
    verticalAlign: 'middle',
    width: '2rem',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down([1999])]: {
      marginRight: '4.5rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginRight: '8.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '2rem',
    },
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
  tablecell: {
    display: 'flex',
    width: '100%',
    background: '#edfaf2',
    [theme.breakpoints.down('md')]: {
      width: '20%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '20%',
    },
  },

  tableContainer: {
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem',
    },
  },
}));

export default function TabellNew({ newSortTable }) {
  const [k2236, setK2236] = useState();
  const [k2438, setK2438] = useState();
  const [k2640, setK2640] = useState();
  const [k2842, setK2842] = useState();
  const [k3044, setK3044] = useState();
  const [k3246, setK3246] = useState();
  const [nblad, setNblad] = useState();
  const [kVS66H, setKVS66H] = useState();
  const [kVS66Hf, setKVS66Hf] = useState();
  const [kVS66V, setKVS66V] = useState();
  const [kVS66Vf, setKVS66Vf] = useState();
  const [nessjoVS66h, setNessjoVS66h] = useState();
  const [nessjoVS66v, setNessjoVS66v] = useState();

  useEffect(() => {
    if (newSortTable) {
      setK2236(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.2-3.6';
        })
      );
      setK2438(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.4-3.8';
        })
      );
      setK2640(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.6-4.0';
        })
      );
      setK2842(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.8-4.2';
        })
      );
      setK3044(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 3.0-4.4';
        })
      );
      setK3246(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 3.2-4.6';
        })
      );
      setNblad(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa N-blad';
        })
      );
      setKVS66H(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 h??yre';
        })
      );
      setKVS66Hf(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 h??yre F';
        })
      );
      setKVS66V(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 venstre';
        })
      );
      setKVS66Vf(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 venstre F';
        })
      );
      setNessjoVS66h(
        newSortTable.filter((item) => {
          return item.type === 'Nessj?? VS-66 h??yre';
        })
      );
      setNessjoVS66v(
        newSortTable.filter((item) => {
          return item.type === 'Nessj?? VS-66 venstre';
        })
      );
    }
  }, [newSortTable]);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Hidden mdDown>
        <Typography style={{ color: 'transparent' }} variant="h6">
          Invisible text
        </Typography>

        <Table size="small" className={classes.tableContainer}>
          <TableHead>
            <TableRow>
              <TableCell>Nye ({newSortTable && newSortTable.length})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {k2236 && k2236.length}

                {k2236 && k2236.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {k2438 && k2438.length}
                {k2438 && k2438.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {k2640 && k2640.length}
                {k2640 && k2640.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {k2842 && k2842.length}{' '}
                {k2842 && k2842.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {k3044 && k3044.length}{' '}
                {k3044 && k3044.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {k3246 && k3246.length}{' '}
                {k3246 && k3246.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {nblad && nblad.length}{' '}
                {nblad && nblad.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {kVS66H && kVS66H.length}
                {kVS66H && kVS66H.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {kVS66Hf && kVS66Hf.length}
                {kVS66Hf && kVS66Hf.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {kVS66V && kVS66V.length}
                {kVS66V && kVS66V.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {kVS66Vf && kVS66Vf.length}
                {kVS66Vf && kVS66Vf.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {nessjoVS66h && nessjoVS66h.length}
                {nessjoVS66h && nessjoVS66h.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tablecell}>
                {nessjoVS66v && nessjoVS66v.length}
                {nessjoVS66v && nessjoVS66v.length > 0 && (
                  <ArrowUpwardIcon className={classes.icon} />
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Hidden>
    </React.Fragment>
  );
}
