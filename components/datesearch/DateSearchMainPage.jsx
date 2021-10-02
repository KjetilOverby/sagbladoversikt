import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import DatePicker from './DatePicker';
import ListFromPickerComponent from './ListFromPickerComponent';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import ArrowRightAltTwoToneIcon from '@material-ui/icons/ArrowRightAltTwoTone';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '5rem',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  dateContainer: {
    width: '100%',
    justifyContent: 'center',
    marginTop: '2rem',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  dateText: {
    marginRight: '.5rem',
  },
  header: {
    margin: '0 0 2rem 0',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2rem',
    },
  },
  icon: {
    marginRight: '.5rem',
    fontSize: '1.1rem',
    verticalAlign: 'middle',
  },
  listComponents: {
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      marginTop: '1rem',
    },
  },
  listContainer: {
    width: '100%',
  },
}));
const DateSearchMainPage = ({
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
  wasteSortTable,
}) => {
  const classes = useStyles();
  const [dayConvert, setdayConvert] = useState();
  const [dayConvert2, setDayConvert2] = useState();
  const [monthConvert, setMonthConvert] = useState();
  const [monthConvert2, setMonthConvert2] = useState();

  useEffect(() => {
    if (startDate && startDate._d.getDay() === 1) {
      setdayConvert('Mandag');
    } else if (startDate && startDate._d.getDay() === 2) {
      setdayConvert('Tirsdag');
    } else if (startDate && startDate._d.getDay() === 3) {
      setdayConvert('Onsdag');
    } else if (startDate && startDate._d.getDay() === 4) {
      setdayConvert('Torsdag');
    } else if (startDate && startDate._d.getDay() === 5) {
      setdayConvert('Fredag');
    } else if (startDate && startDate._d.getDay() === 6) {
      setdayConvert('Lørdag');
    } else if (startDate && startDate._d.getDay() === 7) {
      setdayConvert('Søndag');
    }
  }, [startDate]);
  useEffect(() => {
    if (endDate && endDate._d.getDay === 1) {
      setDayConvert2('Mandag');
    } else if (endDate && endDate._d.getDay() === 2) {
      setDayConvert2('Tirsdag');
    } else if (endDate && endDate._d.getDay() === 3) {
      setDayConvert2('Onsdag');
    } else if (endDate && endDate._d.getDay() === 4) {
      setDayConvert2('Torsdag');
    } else if (endDate && endDate._d.getDay() === 5) {
      setDayConvert2('Fredag');
    } else if (endDate && endDate._d.getDay() === 6) {
      setDayConvert2('Lørdag');
    } else if (endDate && endDate._d.getDay() === 7) {
      setDayConvert2('Søndag');
    }
  }, [endDate]);
  useEffect(() => {
    if (startDate && startDate._d.getMonth() === 0) {
      setMonthConvert('januar');
    } else if (startDate && startDate._d.getMonth() === 1) {
      setMonthConvert('februar');
    } else if (startDate && startDate._d.getMonth() === 2) {
      setMonthConvert('mars');
    } else if (startDate && startDate._d.getMonth() === 3) {
      setMonthConvert('april');
    } else if (startDate && startDate._d.getMonth() === 4) {
      setMonthConvert('mai');
    } else if (startDate && startDate._d.getMonth() === 5) {
      setMonthConvert('juni');
    } else if (startDate && startDate._d.getMonth() === 6) {
      setMonthConvert('juli');
    } else if (startDate && startDate._d.getMonth() === 7) {
      setMonthConvert('august');
    } else if (startDate && startDate._d.getMonth() === 8) {
      setMonthConvert('september');
    } else if (startDate && startDate._d.getMonth() === 9) {
      setMonthConvert('oktober');
    } else if (startDate && startDate._d.getMonth() === 10) {
      setMonthConvert('november');
    } else if (startDate && startDate._d.getMonth() === 11) {
      setMonthConvert('desember');
    }
  }, [startDate]);
  useEffect(() => {
    if (endDate && endDate._d.getMonth() === 0) {
      setMonthConvert2('januar');
    } else if (endDate && endDate._d.getMonth() === 1) {
      setMonthConvert2('februar');
    } else if (endDate && endDate._d.getMonth() === 2) {
      setMonthConvert2('mars');
    } else if (endDate && endDate._d.getMonth() === 3) {
      setMonthConvert2('april');
    } else if (endDate && endDate._d.getMonth() === 4) {
      setMonthConvert2('mai');
    } else if (endDate && endDate._d.getMonth() === 5) {
      setMonthConvert2('juni');
    } else if (endDate && endDate._d.getMonth() === 6) {
      setMonthConvert2('juli');
    } else if (endDate && endDate._d.getMonth() === 7) {
      setMonthConvert2('august');
    } else if (endDate && endDate._d.getMonth() === 8) {
      setMonthConvert2('september');
    } else if (endDate && endDate._d.getMonth() === 9) {
      setMonthConvert2('oktober');
    } else if (endDate && endDate._d.getMonth() === 10) {
      setMonthConvert2('november');
    } else if (endDate && endDate._d.getMonth() === 11) {
      setMonthConvert2('desember');
    }
  }, [endDate]);
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay) + 1);

  return (
    <Grid container className={classes.container} direction="column">
      <Grid
        item
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography className={classes.header} variant="h4">
          Søk på dato
        </Typography>
      </Grid>
      <Grid item>
        <DatePicker
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
          endDate={endDate}
        />
      </Grid>
      <Grid item>
        <Grid container className={classes.dateContainer}>
          {startDate === null ? (
            <Typography className={classes.dateText}>
              Ingen dato valgt
            </Typography>
          ) : (
            <>
              <Grid item>
                <Typography className={classes.dateText}>
                  {dayConvert}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.dateText}>
                  {startDate && startDate._d.getDate()}.
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.dateText}>
                  {monthConvert}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.dateText}>
                  {startDate && startDate._d.getFullYear()}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.dateText}>
                  <ArrowRightAltTwoToneIcon />
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.dateText}>
                  {dayConvert2}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.dateText}>
                  {endDate && endDate._d.getDate()}.
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.dateText}>
                  {monthConvert2}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.dateText}>
                  {endDate && endDate._d.getFullYear()}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.dateText}>
                  ({diffDays} dager)
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
      <Grid item>
        <Grid container className={classes.listContainer}>
          {wasteCountListFromPicker && wasteCountListFromPicker.length > 0 && (
            <Grid item className={classes.listComponents}>
              <ListFromPickerComponent
                title="Vrak"
                count={wasteCountListFromPicker.map((item) => item.wasteblade)}
                list={wasteListFromPicker}
                background="linear-gradient(#dfe9f3,#ffffff)"
                icon={
                  <DeleteTwoToneIcon
                    className={classes.icon}
                    style={{ color: '#ba4f4f' }}
                  />
                }
              />
            </Grid>
          )}

          {serviceCountListFromPicker && serviceCountListFromPicker.length > 0 && (
            <Grid item className={classes.listComponents}>
              <ListFromPickerComponent
                title="Service"
                count={serviceCountListFromPicker.map(
                  (item) => item.servicecount
                )}
                list={serviceListFromPicker}
                background="linear-gradient(#dfe9f3,#ffffff)"
                icon={
                  <BuildTwoToneIcon
                    className={classes.icon}
                    style={{ color: '#4a668a' }}
                  />
                }
              />
            </Grid>
          )}
          {newbladeCountListFromPicker &&
            newbladeCountListFromPicker.length > 0 && (
              <Grid item className={classes.listComponents}>
                <ListFromPickerComponent
                  title="Nye blad"
                  count={newbladeCountListFromPicker.map(
                    (item) => item.newblade
                  )}
                  list={purchaseListFromPicker}
                  background="linear-gradient(#dfe9f3,#ffffff)"
                  icon={
                    <LibraryAddTwoToneIcon
                      className={classes.icon}
                      style={{ color: '#3d9964' }}
                    />
                  }
                />
              </Grid>
            )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DateSearchMainPage;
