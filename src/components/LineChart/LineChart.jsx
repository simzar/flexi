import React from 'react';
import Paper from '@material-ui/core/Paper';

// import {
//   Chart,
//   ArgumentAxis,
//   ValueAxis,
//   Title,
//   BarSeries,
//   LineSeries,
// } from '@devexpress/dx-react-chart-material-ui';
// import { Animation } from '@devexpress/dx-react-chart';

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
      <Chart palette='Harmony Light' title='Population: Age Structure (2000)' dataSource={data}>
        <CommonSeriesSettings type={'area'}>
          <Point visible color='#F99360' hoverMode='allArgumentPoints' />
          <Label visible={true}>
            <Connector visible={true} />
          </Label>
          d
        </CommonSeriesSettings>
        <Series
          argumentField='hour'
          valueField='price'
          name='FlexiCoin tarifas uz 1kWh'
          color='#ffd700'
        />
        <Margin bottom={20} />
        <ArgumentAxis valueMarginsEnabled={false} />
        <Legend verticalAlignment='bottom' horizontalAlignment='center' />
        <Export enabled />
      </Chart>
    </Paper>
  );
};

//
// const LineChart = React.memo(({ data }) => {
//   data = [...data, { price: 12, hour: '21:00' }];
//   return (
//     <Paper>
//       <Chart data={data}>
//         <ArgumentAxis />
//         <ValueAxis max={10} />
//         <LineSeries valueField='price' argumentField='hour' />
//         <Title text='FlexiCoin kainos istorija' />
//         <Animation />
//       </Chart>
//     </Paper>
//   );
// });

export default LineChart;
