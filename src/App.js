import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Card from './components/Card';
import LineChart from './components/LineChart';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Card header='Turimi FlexiCoin:' text={520} />
      <Card header='Gaunami FlexiCoin už 1kWh:' text={17} />
      <div>
        <Typography variant='h5' component='h2'>
          FlexiCoin kainos istorija
        </Typography>
        <LineChart />
      </div>
    </div>
  );
}

export default App;
