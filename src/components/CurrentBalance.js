import React, { useState } from 'react';
import { Grid, Select, Divider, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  gridContainer: {
    maxWidth: '685px',
    border: '1px solid #EBEBEB',
    borderRadius: '10px',
    marginTop: '60px'
  },

  accountBalance: {},

  fundsOnHold: {
    backgroundColor: '#F5F5F5',
    borderRadius: '10px'
  },

  accountBalanceDivider: {
    width: '94%',
    marginLeft: 'auto',
    border: '1px solid #EBEBEB'
  },

  fundsOnHoldDivider: {
    width: '70%',
    marginRight: 'auto',
    border: '1px solid #EBEBEB'
  },

  balanceHeader: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '65px',
    padding: '10px 20px',

    '& .MuiInputBase-root': {
      color: '#2A2A2A'
    },

    '& .MuiSelect-outlined.MuiSelect-outlined': {
      backgroundColor: '#F5F5F5',
      padding: '3px 32px 3px 10px',
      fontSize: '12px'
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      borderRadius: '4px'
    },

    '& .MuiSvgIcon-root': {
      fontSize: '20px'
    }
  },

  headerTitle: {
    fontSize: '12px',
    fontWeight: 700,
    margin: 0
  },

  balanceContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 20px'
  },

  balance: {
    margin: 0,
    fontSize: '25px',
    fontWeight: 700
  },

  balanceRate: {
    margin: 0,
    fontSize: '12px',
    color: '#A6ABB2'
  },

  currencySelect: {
    marginTop: '5px'
  },

  dropDown: {
    '& .MuiPaper-rounded': {
      width: '80%',
      maxWidth: '97px',
      border: '1px solid #EBEBEB',
      boxShadow: 'none',
      marginTop: '4px'
    },

    '& .MuiList-padding': {
      padding: 0
    },

    '& .MuiListItem-root': {
      borderBottom: '1px solid #EBEBEB',
      fontSize: '14px',
      fontWeight: 600
    },

    '& .MuiMenuItem-root': {
      minHeight: '30px'
    }
  },

  '@media (min-width: 520px)': {
    balanceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '25px 20px',

      '& .MuiSelect-outlined.MuiSelect-outlined': {
        padding: '3px 32px 3px 10px',
        fontSize: '12px'
      },

      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
        borderRadius: '4px'
      }
    }
  },

  '@media (min-width: 620px)': {
    balanceHeader: {
      '& .MuiSelect-outlined.MuiSelect-outlined': {
        padding: '5px 32px 5px 10px',
        fontSize: '14px'
      },

      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
        borderRadius: '4px'
      },

      '& .MuiSvgIcon-root': {
        fontSize: '25px'
      }
    },

    headerTitle: {
      fontSize: '14px',
      fontWeight: 'normal',
      margin: 0
    },

    balance: {
      fontSize: '36px'
    },

    balanceRate: {
      fontSize: '16px'
    }
  }
});

const CurrentBalance = () => {
  const classes = useStyles();
  const [currency, setCurrency] = useState('USD');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8, type: 'tween' }}
    >
      <Grid container classes={{ root: classes.gridContainer }}>
        <Grid item xs={6} classes={{ root: classes.accountBalance }}>
          <header className={classes.balanceHeader}>
            <h2 className={classes.headerTitle} style={{ color: '#2C665D' }}>
              Total account balance
            </h2>
            <Select
              value={currency}
              onChange={handleChange}
              inputProps={{
                name: 'currency',
                id: 'currency-native-simple'
              }}
              variant="outlined"
              IconComponent={KeyboardArrowDownRoundedIcon}
              MenuProps={{
                className: classes.dropDown,
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right'
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'right'
                },
                getContentAnchorEl: null
              }}
              className={classes.currencySelect}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="KES">KES</MenuItem>
              <MenuItem value="NGN">NGN</MenuItem>
              <MenuItem value="GHC">GHC</MenuItem>
            </Select>
          </header>
          <Divider classes={{ root: classes.accountBalanceDivider }} />
          <div className={classes.balanceContent}>
            <p className={classes.balance}>&#36;5,332.18</p>
            <p className={classes.balanceRate}>1 USD &#61; 381.97 NGN</p>
          </div>
        </Grid>
        <Grid item xs={6} classes={{ root: classes.fundsOnHold }}>
          <header className={classes.balanceHeader}>
            <h2 className={classes.headerTitle}>Funds on hold</h2>
          </header>
          <Divider classes={{ root: classes.fundsOnHoldDivider }} />
          <div className={classes.balanceContent}>
            <p className={classes.balance}>&#36;5,332.18</p>
          </div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default CurrentBalance;
