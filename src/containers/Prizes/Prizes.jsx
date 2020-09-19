import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const Prize = ({ name, price, image }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar src={image} variant='square' />
    </ListItemAvatar>
    <ListItemText primary={name} secondary={price + ' FlexiCoin'} />
    <ListItemIcon>
      <LabelImportantIcon htmlColor={price > 1000 ? 'grey' : 'green'} fontSize='large' />
    </ListItemIcon>
  </ListItem>
);

export default ({ prizes }) => (
  <List>
    {prizes.map((prize) => (
      <Prize {...prize} key={prize.name} />
    ))}
  </List>
);
