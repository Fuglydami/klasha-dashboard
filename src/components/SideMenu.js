import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as DashboardIcon } from '../assets/dashboard-icon.svg';
import { ReactComponent as BalancesIcon } from '../assets/balances-icon.svg';
import { ReactComponent as CustomersIcon } from '../assets/customers-icon.svg';
import { ReactComponent as AnalyticsIcon } from '../assets/analytics-icon.svg';
import { ReactComponent as SettingsIcon } from '../assets/settings-icon.svg';
import { ReactComponent as TeamIcon } from '../assets/team-icon.svg';
import { ReactComponent as ContactIcon } from '../assets/contact-icon.svg';
import { ReactComponent as LogoutIcon } from '../assets/logout-icon.svg';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },

  tabs: {
    width: '100%',
    color: '#A6ABB2',
    fontSize: '14px',
    paddingTop: '40px',

    '& .MuiTabs-indicator': {
      display: 'none'
    },

    '& .MuiTabs-flexContainer': {
      height: '100%',
      justifyContent: 'flex-start'
    }
  },

  logo: {
    backgroundColor: 'transparent'
  },

  tab: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '32px',
    minHeight: '50px',
    marginBottom: '10px',
    alignSelf: 'flex-end',
    textTransform: 'capitalize',
    paddingLeft: '40px',

    '&:hover': {
      backgroundColor: '#FFFFFF'
    },

    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: '10px',

      '& svg': {
        marginTop: '6px',
        marginBottom: 0,
        marginRight: '13px',
        fill: '#A6ABB2'
      }
    },

    '&.Mui-selected': {
      backgroundColor: '#F5F5F5',
      color: '#2A2A2A',
      fontWeight: '600',

      '& svg path': {
        fill: '#2C665D'
      }
    },

    '&.Mui-disabled': {
      fontWeight: 600,
      color: '#2A2A2A',
      opacity: 1
    }
  }
});

const SideMenu = ({ closeMenuOnClick }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('/balances');
  const history = useHistory();

  useEffect(() => {
    setValue('/balances');
    history.push('/balances');
    // setValue(sessionStorage.getItem('currentTabValue') || history.location.pathname);
  }, []);

  const handleChange = () => {
    setValue('/balances');
    // history.push('/balances');
    // sessionStorage.setItem('currentTabValue', newValue);
    closeMenuOnClick();
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <Box className={classes.root}>
        <Tabs
          variant="standard"
          orientation="vertical"
          onChange={handleChange}
          value={value}
          classes={{ root: classes.tabs }}
        >
          <Tab
            classes={{ root: classes.tab }}
            className={classes.logo}
            icon={<Logo />}
            aria-label="logo"
            disabled
          />
          <Tab classes={{ root: classes.tab }} label="Main pages" disabled />
          <Tab
            classes={{ root: classes.tab }}
            icon={<DashboardIcon />}
            label="Dashboard"
            value="/"
          />
          <Tab
            classes={{ root: classes.tab }}
            icon={<BalancesIcon />}
            label="Balances"
            value="/balances"
          />
          <Tab
            classes={{ root: classes.tab }}
            icon={<CustomersIcon />}
            label="Customers"
            value="/customers"
          />
          <Tab
            classes={{ root: classes.tab }}
            icon={<AnalyticsIcon />}
            label="Analytics"
            value="/analytics"
          />
          <Tab classes={{ root: classes.tab }} label="General" disabled />
          <Tab
            classes={{ root: classes.tab }}
            icon={<SettingsIcon />}
            label="Settings"
            value="/settings"
          />
          <Tab
            classes={{ root: classes.tab }}
            icon={<TeamIcon />}
            label="Team"
            value="/team"
          />
          <Tab
            classes={{ root: classes.tab }}
            icon={<ContactIcon />}
            label="Contact"
            value="/contact"
          />
          <Tab
            classes={{ root: classes.tab }}
            icon={<LogoutIcon />}
            label="Logout"
            value="/logout"
          />
        </Tabs>
      </Box>
    </motion.div>
  );
};

SideMenu.propTypes = {
  closeMenuOnClick: PropTypes.func.isRequired
};

export default SideMenu;
