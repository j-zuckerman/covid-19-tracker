import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { CovidContext } from '../context';

export default function LineChart() {
  const { timeSeriesData } = useContext(CovidContext);

  if (timeSeriesData !== null)
    return (
      <Line
        data={{
          labels: timeSeriesData.dates,
          datasets: [
            {
              data: timeSeriesData.deaths,
              label: 'deaths',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: timeSeriesData.cases,
              label: 'cases',
              borderColor: '#3333ff',
              fill: true,
            },
            {
              data: timeSeriesData.recoveries,
              label: 'recoveries',
              borderColor: '#3333ff',
              fill: true,
            },
          ],
        }}
      ></Line>
    );
  else return null;
}
