import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { makeStyles } from '@material-ui/core';
import Colors from '../../config/Colors';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '30rem',
    width: '30rem',
    [theme.breakpoints.down('lg')]: {
      height: '25rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
}));

const ListOfRetip = ({
  serviceSort0,
  serviceSort1,
  serviceSort2,
  serviceSort3,
  serviceSort4,
  serviceSort5,
}) => {
  const data01 = [
    {
      name: 'Group A',
      value: serviceSort0 && serviceSort0.length,
      fill: Colors.newBlades,
    },
    {
      name: 'Group B',
      value: serviceSort1 && serviceSort1.length,
      fill: Colors.blades1,
    },
    {
      name: 'Group C',
      value: serviceSort2 && serviceSort2.length,
      fill: Colors.blades2,
    },
    {
      name: 'Group D',
      value: serviceSort3 && serviceSort3.length,
      fill: Colors.blades3,
    },
    {
      name: 'Group D',
      value: serviceSort4 && serviceSort4.length,
      fill: Colors.blades4,
    },
    {
      name: 'Group D',
      value: serviceSort5 && serviceSort5.length,
      fill: Colors.blades5,
    },
  ];
  const data02 = [
    { name: 'A1', value: 0, fill: Colors.newBlades },
    { name: 'A2', value: 1, fill: Colors.blades1 },
    { name: 'B1', value: 2, fill: Colors.blades2 },
    { name: 'B2', value: 3, fill: Colors.blades3 },
    { name: 'B3', value: 4, fill: Colors.blades4 },
    { name: 'B4', value: 5, fill: Colors.blades5 },
  ];
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: `(max-width: 1900px)` });
  const [outerRadius, setOuterRadius] = useState(180);
  useEffect(() => {
    if (isMobile) {
      setOuterRadius(130);
    }
  }, []);
  return (
    <div className={classes.container}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={outerRadius}
            label={true}
          />
          {/* <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={130}
            outerRadius={190}
            label={true}
            labelLine={true}
          /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ListOfRetip;
