import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Backdrop, withWidth } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import SideMenu from './SideMenu';

const useStyles = makeStyles({
  sideMenuMobile: {
    position: 'fixed',
    zIndex: 5000
  },

  backDrop: {
    position: 'fixed',
    zIndex: 4999,

    '& .MuiBackdrop-root ': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      zIndex: 'inherit'
    }
  }
});

const Layout = ({ width, children }) => {
  const classes = useStyles();
  const [hideMenu, setHideMenu] = useState(true);

  const handleMenuButton = () => {
    setHideMenu(!hideMenu);
  };

  useEffect(() => {
    if (width === 'md') {
      setHideMenu(true);
    }
  }, [width]);

  return (
    <Grid container style={{ flexWrap: 'nowrap' }}>
      <Hidden smDown={hideMenu}>
        <Grid
          item
          xs={2}
          style={{
            minWidth: '215px',
            maxHeight: '100vh',
            minHeight: '100vh',
            overflow: 'hidden',
            overflowY: 'auto',
            backgroundColor: '#EAEAEA'
          }}
          className={clsx(
            ['xs', 'sm'].includes(width) && classes.sideMenuMobile,
            classes.sideMenu
          )}
        >
          <SideMenu
            closeMenuOnClick={handleMenuButton}
            handleMenuButton={handleMenuButton}
            hideMenu={hideMenu}
          />
        </Grid>
        <Hidden smUp>
          <Grid item xs className={classes.backDrop}>
            <Backdrop open={!hideMenu} onClick={() => setHideMenu(true)} />
          </Grid>
        </Hidden>
      </Hidden>
      <Grid item xs style={{ maxHeight: '100vh', overflow: 'hidden', overflowY: 'auto' }}>
        <Box>
          {React.Children.map(children, (child) => {
            return React.cloneElement(
              child,
              null,
              React.cloneElement(child.props.children, { handleMenuButton })
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired
};

export default withWidth()(Layout);
