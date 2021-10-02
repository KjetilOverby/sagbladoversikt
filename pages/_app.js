import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import axios from 'axios';
import '../components/loginscreen2/loginscreen.css';
import { getRedirectStatus } from 'next/dist/lib/load-custom-routes';
var dateFormat = require('dateformat');


const api = axios.create({
  baseURL: process.env.api,
});
export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [numberOfBlades, setNumberOfBlades] = useState();
  useEffect(() => {
    try {
      api.get(`/count/blades`).then((res) => {
        setNumberOfBlades(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [sawbladeCountList, setSawbladeCountList] = useState();
  useEffect(() => {
    try {
      api.get(`/sort`).then((res) => {
        setSawbladeCountList(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //************** TABLE LIST *****************//
  //*********** service **************/
  const [serviceSortTable, setServiceSortTable] = useState();
  useEffect(() => {
    try {
      api.get(`/service/sort/table`).then((res) => {
        setServiceSortTable(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  //************** new *******************/
  const [newSortTable, setNewSortTable] = useState();
  useEffect(() => {
    try {
      api.get(`/new/sort/table`).then((res) => {
        setNewSortTable(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  
  // ************* Vrak *****************//

  const [wasteSortTable, setWasteSortTable] = useState();
  useEffect(() => {
    try {
      api.get(`/waste/sort/table`).then((res) => {
        setWasteSortTable(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [getFullStartDate, setGetFullStartDate] = useState();
  const [getFullEndDate, setGetFullEndDate] = useState();
  useEffect(() => {
    if (startDate) {
      setGetFullStartDate(
        `${startDate._d.getFullYear()}/${
          startDate._d.getMonth() + 1
        }/${startDate._d.getDate()}`
      );
    }
  }, [startDate]);
  useEffect(() => {
    if (endDate) {
      setGetFullEndDate(
        `${endDate._d.getFullYear()}/${
          endDate._d.getMonth() + 1
        }/${endDate._d.getDate()}`
      );
    }
  }, [endDate]);
  const [wasteListFromPicker, setWasteListFromPicker] = useState();
  useEffect(() => {
    try {
      api
        .get(
          `/waste/sort/picker?startDate=${dateFormat(
            startDate,
            'yyyy-mm-dd'
          )}&endDate=${dateFormat(endDate, 'yyyy-mm-dd')}`
        )
        .then((res) => {
          setWasteListFromPicker(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [endDate]);
  const [wasteCountListFromPicker, setWasteCountListFromPicker] = useState();
  useEffect(() => {
    try {
      api
        .get(
          `/wastecount/sort/picker?startDate=${dateFormat(
            startDate,
            'yyyy-mm-dd'
          )}&endDate=${dateFormat(endDate, 'yyyy-mm-dd')}`
        )
        .then((res) => {
          setWasteCountListFromPicker(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [endDate]);

  //************ New Blades ****************//

  const [purchaseListFromPicker, setPurchaseListFromPicker] = useState();
  useEffect(() => {
    try {
      api
        .get(
          `/newblades/sort/picker?startDate=${dateFormat(
            startDate,
            'yyyy-mm-dd'
          )}&endDate=${dateFormat(endDate, 'yyyy-mm-dd')}`
        )
        .then((res) => {
          setPurchaseListFromPicker(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [endDate]);

  const [
    newbladeCountListFromPicker,
    setNewbladeCountListFromPicker,
  ] = useState();
  useEffect(() => {
    try {
      api
        .get(
          `/newbladecount/sort/picker?startDate=${dateFormat(
            startDate,
            'yyyy-mm-dd'
          )}&endDate=${dateFormat(endDate, 'yyyy-mm-dd')}`
        )
        .then((res) => {
          setNewbladeCountListFromPicker(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [endDate]);
  //************ Service ****************//

  const [serviceListFromPicker, setServiceListFromPicker] = useState();
  useEffect(() => {
    try {
      api
        .get(
          `/service/sort/picker?startDate=${dateFormat(
            startDate,
            'yyyy-mm-dd'
          )}&endDate=${dateFormat(endDate, 'yyyy-mm-dd')}`
        )
        .then((res) => {
          setServiceListFromPicker(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [endDate]);

  const [
    serviceCountListFromPicker,
    setServiceCountListFromPicker,
  ] = useState();
  useEffect(() => {
    try {
      api
        .get(
          `/servicecount/sort/picker?startDate=${dateFormat(
            startDate,
            'yyyy-mm-dd'
          )}&endDate=${dateFormat(endDate, 'yyyy-mm-dd')}`
        )
        .then((res) => {
          setServiceCountListFromPicker(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [endDate]);

  // get retip for each blades

  const [sortedBlades, setSortedBlades] = useState();
  useEffect(() => {
    try {
      api.get(`/sort`).then((res) => {
        setSortedBlades(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [serviceSort0, setServiceSort0] = useState();
  const [serviceSort1, setServiceSort1] = useState();
  const [serviceSort2, setServiceSort2] = useState();
  const [serviceSort3, setServiceSort3] = useState();
  const [serviceSort4, setServiceSort4] = useState();
  const [serviceSort5, setServiceSort5] = useState();
  const [getTypeRetip, setgetTypeRetip] = useState('Kanefusa 2.8-4.2');

  useEffect(() => {
    try {
      api.get(`/service/sort0?type=${getTypeRetip}`).then((res) => {
        setServiceSort0(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [getTypeRetip]);
  useEffect(() => {
    try {
      api.get(`/service/sort1?type=${getTypeRetip}`).then((res) => {
        setServiceSort1(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [getTypeRetip]);
  useEffect(() => {
    try {
      api.get(`/service/sort2?type=${getTypeRetip}`).then((res) => {
        setServiceSort2(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [getTypeRetip]);
  useEffect(() => {
    try {
      api.get(`/service/sort3?type=${getTypeRetip}`).then((res) => {
        setServiceSort3(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [getTypeRetip]);
  useEffect(() => {
    try {
      api.get(`/service/sort4?type=${getTypeRetip}`).then((res) => {
        setServiceSort4(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [getTypeRetip]);
  useEffect(() => {
    try {
      api.get(`/service/sort5?type=${getTypeRetip}`).then((res) => {
        setServiceSort5(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [getTypeRetip]);

  const [sortedBladesService, setSortedBladesService] = useState();
  useEffect(() => {
    try {
      api.get(`/service/sort`).then((res) => {
        setSortedBladesService(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [allBlades, setAllBlades] = useState();

  useEffect(() => {
    try {
      api.get(`/app/v1`).then((res) => {
        setAllBlades(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Moelven Sagbladregister</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component
          {...pageProps}
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
          endDate={endDate}
          wasteListFromPicker={wasteListFromPicker}
          wasteCountListFromPicker={wasteCountListFromPicker}
          purchaseListFromPicker={purchaseListFromPicker}
          newbladeCountListFromPicker={newbladeCountListFromPicker}
          serviceListFromPicker={serviceListFromPicker}
          serviceCountListFromPicker={serviceCountListFromPicker}
          sawbladeCountList={sawbladeCountList}
          wasteSortTable={wasteSortTable}
          newSortTable={newSortTable}
          serviceSortTable={serviceSortTable}
          numberOfBlades={numberOfBlades}
          sortedBlades={sortedBlades}
          serviceSort0={serviceSort0}
          serviceSort1={serviceSort1}
          serviceSort2={serviceSort2}
          serviceSort3={serviceSort3}
          serviceSort4={serviceSort4}
          serviceSort5={serviceSort5}
          setgetTypeRetip={setgetTypeRetip}
          allBlades={allBlades}
          sortedBladesService={sortedBladesService}
          getTypeRetip={getTypeRetip}
        />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
