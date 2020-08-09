import React, { useState, useContext } from 'react';
import { CovidContext } from '../../context';
import { NativeSelect, FormControl } from '@material-ui/core';
import './styles.css';

export default function CountrySelect() {
  const {
    countries,
    fetchGlobalCovidStats,
    fetchCovidStats,
    fetchTimeSeriesData,
    fetchGlobalTimeSeriesData,
  } = useContext(CovidContext);

  const handleCountryChange = async (e) => {
    const country = e.target.value;
    console.log(country);
    if (country === 'global') {
      fetchGlobalCovidStats();
      fetchGlobalTimeSeriesData();
    } else {
      fetchCovidStats(country);
      fetchTimeSeriesData(country);
    }
  };

  if (countries === null) return null;
  return (
    <div style={{ marginTop: '2rem' }}>
      <FormControl className="country_selector">
        <NativeSelect defaultValue={'global'} onChange={handleCountryChange}>
          <option value={'global'}>Global</option>
          {countries.map((country) => (
            <option value={country.value}>{country.name}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
