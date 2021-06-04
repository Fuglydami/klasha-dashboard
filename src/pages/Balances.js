import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { SectionHeader, CurrentBalance, BalanceTable } from '../components';

const Balances = ({ handleMenuButton }) => {
  return (
    <Container>
      <SectionHeader handleMenuButton={handleMenuButton} title="Balances" />
      <CurrentBalance />
      <BalanceTable />
    </Container>
  );
};

Balances.propTypes = {
  handleMenuButton: PropTypes.func
};

Balances.defaultProps = {
  handleMenuButton: () => {}
};

export default Balances;
