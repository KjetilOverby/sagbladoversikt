import React, { useEffect, useState } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import 'react-dates/lib/css/_datepicker.css';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem',
    borderRadius: '5px',
    display: 'grid',
    placeItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  text: {
    fontStyle: 'italic',
    color: '#303a36',
  },
}));
function DatePicker({ setStartDate, startDate, setEndDate, endDate }) {
  const classes = useStyles();
  const theme = useTheme();
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const [calendarCount, setCalendarCount] = useState(2);
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isXLarge = useMediaQuery(theme.breakpoints.down('xl'));

  useEffect(() => {
    if (isMobile) {
      setCalendarCount(1);
    } else if (isSmall) {
      setCalendarCount(2);
    } else if (isLarge) {
      setCalendarCount(4);
    } else if (isXLarge) {
      setCalendarCount(5);
    }
  }, [isMobile, isLarge, isXLarge]);

  return (
    <div className={classes.container}>
      <DateRangePicker
        startDate={startDate}
        startDateId="tata-start-date"
        endDate={endDate}
        endDateId="tata-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        numberOfMonths={calendarCount}
        isOutsideRange={() => false}
        withPortal={true}
        readOnly={true}
      />
      <Typography className={classes.text}>
        Velg en periode i kalenderen
      </Typography>
    </div>
  );
}

export default DatePicker;
