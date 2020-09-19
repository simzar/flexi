import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Wallet from './containers/Wallet';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Wallet />
    </div>
  );
}

export default App;
