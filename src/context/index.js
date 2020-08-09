import React, { createContext, useEffect, useState } from 'react';

export const CovidContext = createContext();

const CovidProvider = ({ children }) => {
  const [covidStats, setCovidStats] = useState(null);
  const [timeSeriesData, setTimeSeriesData] = useState(null);
  const [countries, setCountries] = useState(null);

  async function fetchCountryData() {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    let data = await response.json();

    const countries = data.map((country) => ({
      name: country.country,
      value: country.countryInfo.iso2,
    }));

    setCountries(countries);
  }

  async function fetchGlobalCovidStats() {
    const response = await fetch(
      'https://disease.sh/v3/covid-19/all?yesterday=true'
    );
    let data = await response.json();
    console.log(data);
    setCovidStats(data);
  }

  async function fetchGlobalTimeSeriesData() {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/historical/all?lastdays=30`
    );

    let data = await response.json();

    let dates = [];
    let formattedCases = [];
    let formattedDeaths = [];
    let formattedRecoveries = [];

    const cases = Object.entries(data.cases);
    cases.forEach((e) => formattedCases.push(e[1]));
    cases.forEach((e) => dates.push(e[0]));

    const deaths = Object.entries(data.deaths);
    deaths.forEach((e) => formattedDeaths.push(e[1]));

    const recoveries = Object.entries(data.recovered);
    recoveries.forEach((e) => formattedRecoveries.push(e[1]));

    let timeSeriesData = {
      dates: dates,
      cases: formattedCases,
      deaths: formattedDeaths,
      recoveries: formattedRecoveries,
    };

    console.log(timeSeriesData);
    setTimeSeriesData(timeSeriesData);
  }

  async function fetchCovidStats(country) {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/countries/${country}?yesterday=true`
    );
    let data = await response.json();

    setCovidStats(data);
  }

  async function fetchTimeSeriesData(country) {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`
    );

    let data = await response.json();
    console.log(data);
    let dates = [];
    let formattedCases = [];
    let formattedDeaths = [];
    let formattedRecoveries = [];

    const cases = Object.entries(data.timeline.cases);
    cases.forEach((e) => formattedCases.push(e[1]));
    cases.forEach((e) => dates.push(e[0]));

    const deaths = Object.entries(data.timeline.deaths);
    deaths.forEach((e) => formattedDeaths.push(e[1]));

    const recoveries = Object.entries(data.timeline.recovered);
    recoveries.forEach((e) => formattedRecoveries.push(e[1]));

    let timeSeriesData = {
      dates: dates,
      cases: formattedCases,
      deaths: formattedDeaths,
      recoveries: formattedRecoveries,
    };

    console.log(timeSeriesData);
    setTimeSeriesData(timeSeriesData);
  }

  useEffect(() => {
    fetchCountryData();
    fetchGlobalCovidStats();
    fetchGlobalTimeSeriesData();
  }, []);

  return (
    <CovidContext.Provider
      value={{
        covidStats,
        timeSeriesData,
        fetchCovidStats,
        fetchTimeSeriesData,
        fetchGlobalTimeSeriesData,
        countries,
        fetchGlobalCovidStats,
        fetchCovidStats,
      }}
    >
      {children}
    </CovidContext.Provider>
  );
};

export default CovidProvider;
