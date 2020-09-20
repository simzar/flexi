import React from 'react';
import Paper from '@material-ui/core/Paper';

import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Point,
  SeriesTemplate,
  Label,
  Format,
  Connector,
  //from: https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Area/React/Light/
} from 'devextreme-react/chart';

const LineChart = ({ data }) => {
  return (
    <Paper>
      <Chart palette='Harmony Light' title='FlexiCoin kainos istorija' dataSource={data}>
        <CommonSeriesSettings type={'area'}>
          <Point visible color='#F99360' hoverMode='allArgumentPoints' />
          <Label visible={true}>
            <Connector visible={true} />
          </Label>
        </CommonSeriesSettings>
        <Series
          argumentField='hour'
          valueField='price'
          name='FlexiCoin tarifas už 1kWh'
          color='#ffd700'
        />
        <Margin bottom={20} />
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend verticalAlignment='bottom' horizontalAlignment='center' />
      </Chart>
    </Paper>
  );
};

export default LineChart;
