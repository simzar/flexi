import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { line, curveStep } from 'd3-shape';

const Line = (props) => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveStep)}
  />
);

const format = () => (tick) => tick;

const LineChart = (props) => (
  <Paper>
    <Chart data={props.data}>
      <ArgumentAxis tickFormat={format} />
      <ValueAxis />
      <LineSeries
        name='FlexiCoin kaina'
        valueField='price'
        argumentField='hour'
        color='#cd7f32'
        seriesComponent={Line}
      />
      <Title text='FlexiCoin kainos istorija' />
      <Animation />
    </Chart>
  </Paper>
);

export default memo(LineChart);
