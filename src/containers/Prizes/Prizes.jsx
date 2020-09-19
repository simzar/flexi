import React from 'react';
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
    const { prizes } = this.props;

    return (
      <>
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
      </>
    );
  }
}
