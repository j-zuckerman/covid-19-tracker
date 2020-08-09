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
    <div className="cards-container">
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Card className="card cases">
            <CardContent>
              <Typography variant="h6"> Cases</Typography>
              <Typography variant="h5" className="text_blue">
                +{NumAbbr(covidStats.todayCases, 1)} Today
              </Typography>
              <Typography className="text_secondary">
                {NumAbbr(covidStats.cases, 2)} Total
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className="card deaths">
            <CardContent>
              <Typography variant="h6"> Deaths</Typography>
              <Typography variant="h5" className="text_red">
                +{NumAbbr(covidStats.todayDeaths, 1)} Today
              </Typography>
              <Typography className="text_secondary">
                {NumAbbr(covidStats.deaths, 2)} Total
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className="card recovered">
            <CardContent>
              <Typography variant="h6"> Recoveries</Typography>
              <Typography variant="h5" className="text_green">
                +{NumAbbr(covidStats.todayRecovered, 1)} Today
              </Typography>
              <Typography className="text_secondary">
                {NumAbbr(covidStats.recovered, 2)} Total
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
