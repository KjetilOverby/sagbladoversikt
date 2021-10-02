import React, { useState, useEffect } from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'space-between',
    padding: '0 1rem',
  },
  count: {
    fontSize: '0.8rem',
  },
  divider: {
    padding: '0rem .5rem',
    margin: '.3rem 0',
  },
  header: {
    fontWeight: 'bold',
    paddingLeft: '.3rem',
  },
  listText: {
    paddingLeft: '0.3rem',
    [theme.breakpoints.down([350])]: {
      paddingLeft: 0,
    },
  },
}));
const TableForMobile = ({
  sawbladeCountList,
  serviceSortTable,
  newSortTable,
  wasteSortTable,
  numberOfBlades,
}) => {
  const classes = useStyles();
  const nominell = [20, 20, 40, 40, 30, 50, 25, 25, 25, 25, 25, 25, 25];
  const nominelSum = nominell.reduce((a, b) => a + b, 0);

  // NYE ***************
  const [k2236n, setK2236n] = useState();
  const [k2438n, setK2438n] = useState();
  const [k2640n, setK2640n] = useState();
  const [k2842n, setK2842n] = useState();
  const [k3044n, setK3044n] = useState();
  const [k3246n, setK3246n] = useState();
  const [nbladn, setNbladn] = useState();
  const [kVS66Hn, setKVS66Hn] = useState();
  const [kVS66Hfn, setKVS66Hfn] = useState();
  const [kVS66Vn, setKVS66Vn] = useState();
  const [kVS66Vfn, setKVS66Vfn] = useState();
  const [nessjoVS66hn, setNessjoVS66hn] = useState();
  const [nessjoVS66vn, setNessjoVS66vn] = useState();

  useEffect(() => {
    if (newSortTable) {
      setK2236n(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.2-3.6';
        })
      );
      setK2438n(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.4-3.8';
        })
      );
      setK2640n(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.6-4.0';
        })
      );
      setK2842n(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.8-4.2';
        })
      );
      setK3044n(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 3.0-4.4';
        })
      );
      setK3246n(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa 3.2-4.6';
        })
      );
      setNbladn(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa N-blad';
        })
      );
      setKVS66Hn(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 høyre';
        })
      );
      setKVS66Hfn(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 høyre F';
        })
      );
      setKVS66Vn(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 venstre';
        })
      );
      setKVS66Vfn(
        newSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 venstre F';
        })
      );
      setNessjoVS66hn(
        newSortTable.filter((item) => {
          return item.type === 'Nessjø VS-66 høyre';
        })
      );
      setNessjoVS66vn(
        newSortTable.filter((item) => {
          return item.type === 'Nessjø VS-66 venstre';
        })
      );
    }
  }, [newSortTable]);
  // WASTE ***************
  const [k2236w, setK2236w] = useState();
  const [k2438w, setK2438w] = useState();
  const [k2640w, setK2640w] = useState();
  const [k2842w, setK2842w] = useState();
  const [k3044w, setK3044w] = useState();
  const [k3246w, setK3246w] = useState();
  const [nbladw, setNbladw] = useState();
  const [kVS66Hw, setKVS66Hw] = useState();
  const [kVS66Hfw, setKVS66Hfw] = useState();
  const [kVS66Vw, setKVS66Vw] = useState();
  const [kVS66Vfw, setKVS66Vfw] = useState();
  const [nessjoVS66hw, setNessjoVS66hw] = useState();
  const [nessjoVS66vw, setNessjoVS66vw] = useState();

  useEffect(() => {
    if (wasteSortTable) {
      setK2236w(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.2-3.6';
        })
      );
      setK2438w(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.4-3.8';
        })
      );
      setK2640w(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.6-4.0';
        })
      );
      setK2842w(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.8-4.2';
        })
      );
      setK3044w(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa 3.0-4.4';
        })
      );
      setK3246w(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa 3.2-4.6';
        })
      );
      setNbladw(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa N-blad';
        })
      );
      setKVS66Hw(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 høyre';
        })
      );
      setKVS66Hfw(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 høyre F';
        })
      );
      setKVS66Vw(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 venstre';
        })
      );
      setKVS66Vfw(
        wasteSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 venstre F';
        })
      );
      setNessjoVS66hw(
        wasteSortTable.filter((item) => {
          return item.type === 'Nessjø VS-66 høyre';
        })
      );
      setNessjoVS66vw(
        wasteSortTable.filter((item) => {
          return item.type === 'Nessjø VS-66 venstre';
        })
      );
    }
  }, [wasteSortTable]);

  // SERVICE *************
  const [k2236s, setK2236s] = useState();
  const [k2438s, setK2438s] = useState();
  const [k2640s, setK2640s] = useState();
  const [k2842s, setK2842s] = useState();
  const [k3044s, setK3044s] = useState();
  const [k3246s, setK3246s] = useState();
  const [nblads, setNblads] = useState();
  const [kVS66Hs, setKVS66Hs] = useState();
  const [kVS66Hfs, setKVS66Hfs] = useState();
  const [kVS66Vs, setKVS66Vs] = useState();
  const [kVS66Vfs, setKVS66Vfs] = useState();
  const [nessjoVS66hs, setNessjoVS66hs] = useState();
  const [nessjoVS66vs, setNessjoVS66vs] = useState();

  useEffect(() => {
    if (serviceSortTable) {
      setK2236s(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.2-3.6';
        })
      );
      setK2438s(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.4-3.8';
        })
      );
      setK2640s(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.6-4.0';
        })
      );
      setK2842s(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa 2.8-4.2';
        })
      );
      setK3044s(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa 3.0-4.4';
        })
      );
      setK3246s(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa 3.2-4.6';
        })
      );
      setNblads(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa N-blad';
        })
      );
      setKVS66Hs(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 høyre';
        })
      );
      setKVS66Hfs(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 høyre F';
        })
      );
      setKVS66Vs(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 venstre';
        })
      );
      setKVS66Vfs(
        serviceSortTable.filter((item) => {
          return item.type === 'Kanefusa VS-66 venstre F';
        })
      );
      setNessjoVS66hs(
        serviceSortTable.filter((item) => {
          return item.type === 'Nessjø VS-66 høyre';
        })
      );
      setNessjoVS66vs(
        serviceSortTable.filter((item) => {
          return item.type === 'Nessjø VS-66 venstre';
        })
      );
    }
  }, [serviceSortTable]);
  const bladeTypes = [
    'K 2.2-3.6',
    'K 2.4-3.8',
    'K 2.6-4.0',
    'K 2.8-4.2',
    'K 3.0-4.4',
    'K 3.2-4.6',
    'K N-blad',
    'K VS-66 høyre',
    'K VS-66 høyre F',
    'K VS-66 ventre',
    'K VS-66 venstre F',
    'N VS-66 høyre',
    'N VS-66 venstre',
  ];
  return (
    <>
      <Typography style={{ margin: '-2rem 0 2rem 1rem' }} variant="h6">
        Oversikt over bladtyper i år
      </Typography>
      <Grid container className={classes.container}>
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container direction="column">
            <Grid item>
              <Typography className={classes.header}>bladtype</Typography>
              <Typography className={classes.count}>
                ({sawbladeCountList && sawbladeCountList.length})
              </Typography>
              <Divider className={classes.divider} />
              {bladeTypes.map((item) => (
                <>
                  <Typography
                    className={classes.listText}
                    style={{ color: '#7b7979', fontStyle: 'italic' }}
                  >
                    {item}
                  </Typography>
                  <Divider className={classes.divider} />
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item style={{ width: '100%' }}>
              <Typography className={classes.header}>ant</Typography>
              <Typography className={classes.count}>
                ({numberOfBlades && numberOfBlades.map((item) => item.sagblad)})
              </Typography>
              <Divider className={classes.divider} />
              {sawbladeCountList &&
                sawbladeCountList.map((item) => (
                  <Grid>
                    <Typography className={classes.listText}>
                      {item.typeCount}
                    </Typography>
                    <Divider className={classes.divider} />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item style={{ width: '100%', background: '#f0f0f0' }}>
              <>
                <Typography className={classes.header}>nom</Typography>
                <Typography className={classes.count}>
                  ( {nominelSum})
                </Typography>
                <Divider className={classes.divider} />
                {nominell.map((item) => (
                  <>
                    <Typography className={classes.listText}>{item}</Typography>
                    <Divider className={classes.divider} />
                  </>
                ))}
              </>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item style={{ width: '100%', background: '#faeded' }}>
              <Typography className={classes.header}>vrk</Typography>
              <Typography className={classes.count}>
                ({wasteSortTable && wasteSortTable.length})
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2236w && k2236w.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2438w && k2438w.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2640w && k2640w.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2842w && k2842w.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k3044w && k3044w.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k3246w && k3246w.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {nbladw && nbladw.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Hw && kVS66Hw.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Hfw && kVS66Hfw.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Vw && kVS66Vw.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Vfw && kVS66Vfw.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {nessjoVS66hw && nessjoVS66hw.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {nessjoVS66vw && nessjoVS66vw.length}
              </Typography>
              <Divider className={classes.divider} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item style={{ width: '100%', background: '#edfaf0' }}>
              <Typography className={classes.header}>nye</Typography>
              <Typography className={classes.count}>
                ({newSortTable && newSortTable.length})
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2236n && k2236n.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2438n && k2438n.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2640n && k2640n.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2842n && k2842n.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k3044n && k3044n.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k3246n && k3246n.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {nbladn && nbladn.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Hn && kVS66Hn.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Hfn && kVS66Hfn.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Vn && kVS66Vn.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Vfn && kVS66Vfn.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {nessjoVS66hn && nessjoVS66hn.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {nessjoVS66vn && nessjoVS66vn.length}
              </Typography>
              <Divider className={classes.divider} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item style={{ width: '100%', background: '#edf4fa' }}>
              <Typography className={classes.header}>svc</Typography>
              <Typography className={classes.count}>
                ({serviceSortTable && serviceSortTable.length})
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2236s && k2236s.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2438s && k2438s.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2640s && k2640s.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k2842s && k2842s.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k3044s && k3044s.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {k3246s && k3246s.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {nblads && nblads.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Hs && kVS66Hs.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Hfs && kVS66Hfs.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Vs && kVS66Vs.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {kVS66Vfs && kVS66Vfs.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {nessjoVS66hs && nessjoVS66hs.length}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.listText}>
                {nessjoVS66vs && nessjoVS66vs.length}
              </Typography>
              <Divider className={classes.divider} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TableForMobile;
