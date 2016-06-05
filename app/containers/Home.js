import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Home extends Component {

  render() {
    return (
      <div>
        <Helmet title='Home Page' />
        Welcome to worksheet rendering project
      </div>
    )
  }
}

export default Home;
