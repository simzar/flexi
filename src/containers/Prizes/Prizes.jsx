import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Popup from '../../components/Popup';

const classes = {
  modalHeader: {
    fontSize: 18,
    color: 'green',
  },

  modalBody: {},
};

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

const Prize = ({ name, price, image, onBuy }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar src={image} variant='square' />
    </ListItemAvatar>
    <ListItemText primary={name} secondary={price + ' FlexiCoin'} />
    <ListItemIcon onClick={price > 1000 ? () => {} : () => onBuy()}>
      <LabelImportantIcon htmlColor={price > 1000 ? 'grey' : 'green'} fontSize='large' />
    </ListItemIcon>
  </ListItem>
);

export default class Prizes extends React.Component {
  state = {
    showModal: false,
    modalSuccessMessage: null,
  };

  onBuy(successMessage) {
    this.setState(() => ({ showModal: true, modalSuccessMessage: successMessage }));
  }

  render() {
    return (
      <Fragment>
        <List>
          {prizes.map((prize) => (
            <Prize {...prize} key={prize.name} onBuy={() => this.onBuy(prize.afterBuyMessage)} />
          ))}
        </List>
        <Popup
          open={this.state.showModal}
          onClose={() => this.setState(() => ({ showModal: false }))}
        >
          <p style={classes.modalHeader}>Pirkimas sėkmingas</p>
          <p style={classes.modalBody}>{this.state.modalSuccessMessage}</p>
        </Popup>
      </Fragment>
    );
  }
}
