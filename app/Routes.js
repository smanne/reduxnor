import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import NoMatch from './containers/NoMatch';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path="*" component={NoMatch} />
  </Route>
);
