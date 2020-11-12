import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

import {
  Dashboard,
  SignIn
} from './modules';

export default function App() {
  return (
    <Fragment>
      <Router history={browserHistory} basename="/your-folder-name-in-github.io">
        <h1>Simple Banking App goes here</h1>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};