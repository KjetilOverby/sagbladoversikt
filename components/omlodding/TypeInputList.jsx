import React, { useState } from 'react';
import { makeStyles, TextField, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));
const TypeInputListComponent = ({ setGetType }) => {
  const classes = useStyles();
  const [getValue, setGetValue] = useState();
  const sawBlades = [
    {
      value: 'Kanefusa 2.2-3.6',
      label: 'Kanefusa 2.2-3.6',
    },
    {
      value: 'Kanefusa 2.4-3.8',
      label: 'Kanefusa 2.4-3.8',
    },
    {
      value: 'Kanefusa 2.6-4.0',
      label: 'Kanefusa 2.6-4.0',
    },
    {
      value: 'Kanefusa 2.8-4.2',
      label: 'Kanefusa 2.8-4.2',
    },
    {
      value: 'Kanefusa 3.0-4.4',
      label: 'Kanefusa 3.0-4.4',
    },
    {
      value: 'Kanefusa 3.2-4.6',
      label: 'Kanefusa 3.2-4.6',
    },
    {
      value: 'Kanefusa N-blad',
      label: 'Kanefusa N-blad',
    },
    {
      value: 'Kanefusa VS-66 venstre',
      label: 'Kanefusa VS-66 venstre',
    },
    {
      value: 'Kanefusa VS-66 høyre',
      label: 'Kanefusa VS-66 høyre',
    },
    {
      value: 'Kanefusa VS-66 venstre F',
      label: 'Kanefusa VS-66 venstre F',
    },
    {
      value: 'Kanefusa VS-66 høyre F',
      label: 'Kanefusa VS-66 høyre F',
    },
    {
      value: 'Nessjø 2.8-4.2',
      label: 'Nessjø 2.8-4.2',
    },
    {
      value: 'Nessjø VS-66 venstre',
      label: 'Nessjø VS-66 venstre',
    },
    {
      value: 'Nessjø VS-66 høyre',
      label: 'Nessjø VS-66 høyre',
    },
  ];

  const getTypeHandler = (e) => {
    setGetType(e.target.value);
  };
  return (
    <div>
      <TextField
        required
        id="standard-select-currency"
        select
        name="type"
        onChange={getTypeHandler}
        variant="outlined"
        style={{ width: '20rem', margin: '1rem 0' }}
      >
        {sawBlades.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default TypeInputListComponent;
