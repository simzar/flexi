import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  Title,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const LineChart = (props) => (
  <Paper>
    <Chart data={props.data}>
      <ArgumentAxis />
      <ValueAxis max={20} />
      <BarSeries valueField='price' argumentField='hour' />
      <Title text='FlexiCoin kainos istorija' />
      <Animation />
    </Chart>
  </Paper>
);

export default memo(LineChart);
