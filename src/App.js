import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components';
import { Balances, Dashboard } from './pages';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Balances />
          </Route>
          <Route exact path="/balances">
            <Balances />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
