import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import VerticalNavBar from './containers/NavBar/VerticalNavBar';
import Menu from './components/Menu';
import Wallet from './containers/Wallet';
import Prizes from './containers/Prizes';

import './App.css';
import { showNotification } from './utils/notificationUtils';
import Devices from './containers/Devices';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='App'>
      <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && <VerticalNavBar onClick={() => setIsMenuOpen(false)} />}

      <Switch>
        <Route exact path='/'>
          <Redirect to='/wallet' />
        </Route>
        <Route exact path='/wallet' component={Wallet} />
        <Route exact path='/prizes' component={Prizes} />
        <Route exact path='/devices' component={Devices} />
      </Switch>
    </div>
  );
};

window.showReduceConsumptionToast = () =>
  showNotification(
    'If you reduced your electricity consumption for the next hour, you could receive up to 10 additional FlexiCoins!',
  );
window.showIncreaseConsumptionToast = () =>
  showNotification(
    'If you increased your electricity consumption for the next hour, you could receive up to 8 additional FlexiCoins!',
  );
window.showToast = (message = 'a toast') => showNotification(message);

export default App;
