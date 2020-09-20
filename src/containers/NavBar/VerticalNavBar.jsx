import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import RadioTwoToneIcon from '@material-ui/icons/RadioTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    position: 'fixed',
    height: '100%',
    width: '60%',
    zIndex: 10,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  link: {
    display: 'flex',
  },
}));

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const VerticalNavBar = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        className={classes.tabs}
      >
        <Link to='/wallet' classes={classes.link} onClick={props.onClick}>
          <AccountBalanceWalletTwoToneIcon />
          <Tab label='Wallet' {...a11yProps(0)} />
        </Link>
        <Link to='/devices' classes={classes.link} onClick={props.onClick}>
          <RadioTwoToneIcon />
          <Tab label='Devices' {...a11yProps(1)} />
        </Link>
        <Link to='/prizes' classes={classes.link} onClick={props.onClick}>
          <StorefrontTwoToneIcon />
          <Tab label='Prizes' {...a11yProps(1)} />
        </Link>
      </Tabs>
    </div>
  );
};

export default VerticalNavBar;
