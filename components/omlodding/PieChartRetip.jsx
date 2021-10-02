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
      width: '25rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
}));

const PieChartRetip = ({
  retip0,
  retip1,
  retip2,
  retip3,
  retip4,
  retip5,
  allBlades,
}) => {
  const [countAllBlades, setCountAllBlades] = useState();
  useEffect(() => {
    if (allBlades) {
      setCountAllBlades(allBlades.length);
    }
  }, [allBlades]);
  const retip0Percent = parseInt((retip0 * 100) / countAllBlades);
  const retip1Percent = parseInt((retip1 * 100) / countAllBlades);
  const retip2Percent = parseInt((retip2 * 100) / countAllBlades);
  const retip3Percent = parseInt((retip3 * 100) / countAllBlades);
  const retip4Percent = parseInt((retip4 * 100) / countAllBlades);
  const retip5Percent = parseInt((retip5 * 100) / countAllBlades);
  const data01 = [
    { name: 'Group A', value: retip0, fill: Colors.newBlades },
    { name: 'Group B', value: retip1, fill: Colors.blades1 },
    { name: 'Group C', value: retip2, fill: Colors.blades2 },
    { name: 'Group D', value: retip3, fill: Colors.blades3 },
    { name: 'Group D', value: retip4, fill: Colors.blades4 },
    { name: 'Group D', value: retip5, fill: Colors.blades5 },
  ];
  const data02 = [
    { name: 'A1', value: retip0Percent, fill: Colors.newBlades },
    { name: 'A2', value: retip1Percent, fill: Colors.blades1 },
    { name: 'B1', value: retip2Percent, fill: Colors.blades2 },
    { name: 'B2', value: retip3Percent, fill: Colors.blades3 },
    { name: 'B3', value: retip4Percent, fill: Colors.blades4 },
    { name: 'B4', value: retip5Percent, fill: Colors.blades5 },
  ];
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: `(max-width: 1900px)` });
  const [resize, setResize] = useState(60);
  const [resizeInner, setResizeInner] = useState(130);
  const [resizeOuter, setResizeOuter] = useState(190);
  useEffect(() => {
    if (isMobile) {
      setResize(40);
      setResizeInner(80);
      setResizeOuter(130);
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
            outerRadius={resize}
            label={true}
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={resizeInner}
            outerRadius={resizeOuter}
            label={true}
            labelLine={true}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartRetip;
