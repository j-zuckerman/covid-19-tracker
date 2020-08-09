import React, { useContext } from 'react';
import { CovidContext } from '../../context';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NumAbbr from 'number-abbreviate';

import './styles.css';

export default function Cards({ type }) {
  const { covidStats } = useContext(CovidContext);

  if (covidStats === null) return null;

  return (
    <Grid container spacing={3} justify="center">
      <Grid item>
        <Card className="card">
          <CardContent>
            <Typography> Cases</Typography>
            <Typography>+{NumAbbr(covidStats.todayCases, 1)}</Typography>
            <Typography> {NumAbbr(covidStats.cases, 2)}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className="card">
          <CardContent>
            <Typography> Deaths</Typography>
            <Typography>+{NumAbbr(covidStats.todayDeaths, 1)}</Typography>
            <Typography>{NumAbbr(covidStats.deaths, 2)}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className="card">
          <CardContent>
            <Typography> Recoveries</Typography>
            <Typography>+{NumAbbr(covidStats.todayRecovered, 1)}</Typography>
            <Typography>{NumAbbr(covidStats.recovered, 2)}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
