import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, LineSeries } from '@devexpress/dx-react-chart-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
];

const useStyles = makeStyles({
  chartWrapper: {
    margin: '1rem auto',
    width: '50%',
  },
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.chartWrapper}>
      <Paper>
        <Chart data={data}>
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries valueField='value' argumentField='argument' />
        </Chart>
      </Paper>
    </div>
  );
};
