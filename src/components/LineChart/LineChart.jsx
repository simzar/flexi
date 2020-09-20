import React from 'react';
import Paper from '@material-ui/core/Paper';

import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Margin,
  Point,
  //from: https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Area/React/Light/
} from 'devextreme-react/chart';

const LineChart = ({ data }) => {
  return (
    <Paper>
      <Chart palette='Harmony Light' title='FlexiCoin rate per 1kWh' dataSource={data}>
        <CommonSeriesSettings argumentField='year' type='spline'>
          <Point visible={false} color='#61f8aa' hoverMode='allArgumentPoints' />
        </CommonSeriesSettings>
        <Series argumentField='hour' valueField='price' name='' color='#1937d4' />
        <Margin bottom={20} />
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend verticalAlignment='bottom' horizontalAlignment='center' visible={false} />
      </Chart>
    </Paper>
  );
};

export default LineChart;
