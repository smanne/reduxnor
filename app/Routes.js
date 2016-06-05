import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Worksheet from './containers/Worksheet';
import NoMatch from './containers/NoMatch';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='worksheet/:id' component={Worksheet} />
    <Route path="*" component={NoMatch} />
  </Route>
);
