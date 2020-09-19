import React from 'react';
import Card from '../../components/Card/Card';
import Typography from '@material-ui/core/Typography';
import LineChart from '../../components/LineChart/LineChart';

export default () => (
  <>
    <Card header='Turimi FlexiCoin:' text={520} />
    <Card header='Gaunami FlexiCoin už 1kWh:' text={17} />
    <div>
      <Typography variant='h5' component='h2'>
        FlexiCoin kainos istorija
      </Typography>
      <LineChart />
    </div>
  </>
);
