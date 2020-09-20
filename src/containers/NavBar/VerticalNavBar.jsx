import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    position: 'absolute',
    height: 224,
    zIndex: 10,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const VerticalNavBar = () => {
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
        <Link to='/wallet'>
          <Tab label='Wallet' {...a11yProps(0)} />
        </Link>

        <Link to='/prizes'>
          <Tab label='Prizes' {...a11yProps(1)} />
        </Link>
      </Tabs>
    </div>
  );
};

export default VerticalNavBar;
