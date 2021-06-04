import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { SectionHeader } from '../components';

const Dashboard = ({ handleMenuButton }) => {
  return (
    <Container>
      <SectionHeader handleMenuButton={handleMenuButton} title="Dashboard" />
    </Container>
  );
};

Dashboard.propTypes = {
  handleMenuButton: PropTypes.func
};

Dashboard.defaultProps = {
  handleMenuButton: () => {}
};

export default Dashboard;
