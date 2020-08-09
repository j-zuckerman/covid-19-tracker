import React from 'react';
import CovidProvider from '../context';
import LineChart from './LineChart';
import Cards from './Cards/Cards';
import CountrySelect from './CountrySelect/CountrySelect';

function App() {
  return (
    <CovidProvider>
      <div className="App">
        <CountrySelect></CountrySelect>
        <Cards></Cards>
        <LineChart></LineChart>
      </div>
    </CovidProvider>
  );
}

export default App;
