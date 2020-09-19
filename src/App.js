import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Card from './components/Card';
import LineChart from './components/LineChart';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Card header='Turimi FlexiCoin:' text={520} />
      <Card header='Gaunami FlexiCoin už 1kWh:' text={17} />
      <Card header='FlexiCoin kainos istorija' text={<LineChart />} />
    </div>
  );
}

export default App;
