import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logo from './../../icons/flexitis_logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'absolute',
    flexGrow: 1,
    width: '100%',
    zIndex: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  iconWrapper: {
    display: 'flex',
    margin: 'auto',
    paddingRight: '30px',
  },
  titleText: {
    marginLeft: '3px',
  },
}));

export default function Menu(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={props.onClick}
          >
            <MenuIcon />
          </IconButton>
          <span className={classes.iconWrapper}>
            <img src={logo} width='30px' alt='Logo' />
            <Typography variant='h6' className={classes.title}>
              <span className={classes.titleText}>Flexitis</span>
            </Typography>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
