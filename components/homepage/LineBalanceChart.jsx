import { Typography, makeStyles, Hidden } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
var dateFormat = require('dateformat');
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
const useStyles = makeStyles((theme) => ({
  container: {
    height: '30rem',
    width: '100rem',
    borderRadius: '5px',
    marginTop: '10rem',
    [theme.breakpoints.down([1999])]: {
      height: '20rem',
      width: '75rem',
    },
    [theme.breakpoints.down('lg')]: {
      width: '95%',
      height: '25rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '95vw',
      height: '15rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '10rem',
      marginLeft: '-3rem',
    },
    [theme.breakpoints.down('xs')]: {},
  },
  header: {
    margin: '1rem 0 2rem 3rem',
    color: '#7c7c7c',
    fontStyle: 'italic',
  },
}));
const PureComponent = ({ newSortTable, wasteSortTable }) => {
  const currentYear = new Date().getFullYear();
  const previousYear = new Date().getFullYear() - 1;
  const [jan, setJan] = useState();
  const [janPre, setJanPre] = useState();
  const [feb, setFeb] = useState();
  const [febPre, setFebPre] = useState();
  const [mar, setMar] = useState();
  const [marPre, setMarPre] = useState();
  const [apr, setApr] = useState();
  const [aprPre, setAprPre] = useState();
  const [may, setMay] = useState();
  const [mayPre, setMayPre] = useState();
  const [jun, setJun] = useState();
  const [junPre, setJunPre] = useState();
  const [jul, setJul] = useState();
  const [julPre, setJulPre] = useState();
  const [aug, setAug] = useState();
  const [augPre, setAugPre] = useState();
  const [sep, setSep] = useState();
  const [sepPre, setSepPre] = useState();
  const [okt, setOkt] = useState();
  const [oktPre, setOktPre] = useState();
  const [nov, setNov] = useState();
  const [novPre, setNovPre] = useState();
  const [des, setDes] = useState();
  const [desPre, setDesPre] = useState();
  useEffect(() => {
    if (wasteSortTable) {
      setJan(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-01`);
        })
      );
      setJanPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-01`);
          })
      );
      setFeb(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-02`);
        })
      );
      setFebPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-02`);
          })
      );
      setMar(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-03`);
        })
      );
      setMarPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-03`);
          })
      );
      setApr(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-04`);
        })
      );
      setAprPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-04`);
          })
      );
      setMay(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-05`);
        })
      );
      setMayPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-05`);
          })
      );
      setJun(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-06`);
        })
      );
      setJunPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-06`);
          })
      );
      setJul(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-07`);
        })
      );
      setJulPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-07`);
          })
      );
      setAug(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-08`);
        })
      );
      setAugPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-08`);
          })
      );
      setSep(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-09`);
        })
      );
      setSepPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-09`);
          })
      );
      setOkt(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-10`);
        })
      );
      setOktPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-10`);
          })
      );
      setNov(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-11`);
        })
      );
      setNovPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-11`);
          })
      );
      setDes(
        wasteSortTable.filter((item) => {
          const parse = dateFormat(item.wasteDate, 'yyyy-mm');
          return parse.includes(`${currentYear}-12`);
        })
      );
      setDesPre(
        newSortTable &&
          newSortTable.filter((item) => {
            const parse = dateFormat(item.updated, 'yyyy-mm');
            return parse.includes(`${currentYear}-12`);
          })
      );
    }
  }, [wasteSortTable]);

  const data = [
    {
      name: 'Jan',
      Nye: janPre && janPre.length,
      Vrak: jan && jan.length,
      amt: 2400,
    },
    {
      name: 'Feb',
      Nye: febPre && febPre.length,
      Vrak: feb && feb.length,
      amt: 2210,
    },
    {
      name: 'Mar',
      Nye: marPre && marPre.length,
      Vrak: mar && mar.length,
      amt: 2290,
    },
    {
      name: 'Apr',
      Nye: aprPre && aprPre.length,
      Vrak: apr && apr.length,
      amt: 2000,
    },
    {
      name: 'Mai',
      Nye: mayPre && mayPre.length,
      Vrak: may && may.length,
      amt: 2181,
    },
    {
      name: 'Jun',
      Nye: junPre && junPre.length,
      Vrak: jun && jun.length,
      amt: 2500,
    },
    {
      name: 'Jul',
      Nye: julPre && julPre.length,
      Vrak: jul && jul.length,
      amt: 2100,
    },
    {
      name: 'Aug',
      Nye: augPre && augPre.length,
      Vrak: aug && aug.length,
      amt: 2100,
    },
    {
      name: 'Sep',
      Nye: sepPre && sepPre.length,
      Vrak: sep && sep.length,
      amt: 2100,
    },
    {
      name: 'Okt',
      Nye: oktPre && oktPre.length,
      Vrak: okt && okt.length,
      amt: 2100,
    },
    {
      name: 'Nov',
      Nye: novPre && novPre.length,
      Vrak: nov && nov.length,
      amt: 2100,
    },
    {
      name: 'Des',
      Nye: desPre && desPre.length,
      Vrak: des && des.length,
      amt: 2100,
    },
  ];
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.header}>
        Balanse mellom nye og vrakede blad i år
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Nye"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Vrak" stroke="#ec3e27" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PureComponent;
