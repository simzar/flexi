import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Wallet from './containers/Wallet';
import Prizes from './containers/Prizes';

const prizes = [
  {
    name: 'Nemokamas elektromobilio pakrovimas',
    price: 1000,
    image:
      'https://image.made-in-china.com/2f0j00qzjGmOdgGnko/SAE-J1772-Type-1-Plug-EV-Charger-Unit-11kw-3phase.jpg',
    afterBuyMessage: 'Naudodamiesi savo Fixitis ID galėsite pasikrauti savo automobilį nemokamai.',
  },
  {
    name: 'Tesla automobilis',
    price: 1_000_000_000,
    image:
      'https://www.tesla.com/sites/default/files/modelsx-new/ms-rhd-eu-en/hero/RHD_model-s_hero%402x.jpg',
    afterBuyMessage: 'Tesla automobilį į jūsų namus pristatysime per 7 d.d.',
  },
];

function App() {
  return (
    <div className='App'>
      <Menu />
      {/*<Wallet />*/}
      <Prizes prizes={prizes} />
    </div>
  );
}

export default App;
