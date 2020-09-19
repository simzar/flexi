import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import VerticalNavBar from './containers/NavBar/VerticalNavBar';
import Menu from './components/Menu';
import Wallet from './containers/Wallet';
import Prizes from './containers/Prizes';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Menu />
      <VerticalNavBar />

      <Switch>
        <Route exact path='/'>
          <Redirect to='/wallet' />
        </Route>
        <Route exact path='/wallet' component={Wallet} />
        <Route exact path='/prizes' component={Prizes} />
      </Switch>
    </div>
  );
}

export default App;
