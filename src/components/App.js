import React from 'react';
import CovidProvider from '../context';
import LineChart from './LineChart/LineChart';
import Cards from './Cards/Cards';
import CountrySelect from './CountrySelect/CountrySelect';
import styles from './styles.module.css';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <CovidProvider>
      <div className={styles.container}>
        <Typography variant="h2">Covid-19 Tracker</Typography>
        <CountrySelect></CountrySelect>
        <Cards></Cards>
        <LineChart></LineChart>
      </div>
    </CovidProvider>
  );
}

export default App;
