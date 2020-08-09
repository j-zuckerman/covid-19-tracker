import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { CovidContext } from '../../context';
import styles from './styles.module.css';

export default function LineChart() {
  const { timeSeriesData } = useContext(CovidContext);

  if (timeSeriesData !== null)
    return (
      <div className={styles.container}>
        <Line
          className={styles.linechart}
          data={{
            labels: timeSeriesData.dates,
            datasets: [
              {
                data: timeSeriesData.deaths,
                label: 'deaths',
                borderColor: '#9e2b25',
              },
              {
                data: timeSeriesData.cases,
                label: 'cases',
                borderColor: '#0244A1',
              },
              {
                data: timeSeriesData.recoveries,
                label: 'recoveries',
                borderColor: '#439a86',
              },
            ],
          }}
        ></Line>
      </div>
    );
  else return null;
}
