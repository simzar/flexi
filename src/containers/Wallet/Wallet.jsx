import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Card from '../../components/Card/Card';
import LineChart from '../../components/LineChart/LineChart';

export default () => (
  <>
    <Card
      header='Turimi FlexiCoin:'
      text={<Chip avatar={<Avatar>520</Avatar>} label='Flexicoin' color='primary' />}
    />
    <Card
      header='Gaunami FlexiCoin už 1kWh:'
      text={<Chip avatar={<Avatar>17</Avatar>} label='Flexicoin' color='primary' />}
    />
    <div>
      <Typography variant='h5' component='h2'>
        FlexiCoin kainos istorija
      </Typography>
      <LineChart />
    </div>
  </>
);
