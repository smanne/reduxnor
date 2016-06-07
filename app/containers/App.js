import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
var FontAwesome = require('react-fontawesome');


class App extends Component {

  render() {
    return (
      <div>
        <Helmet
          title='Tabtor'
          titleTemplate='Tabtor - %s'
          meta={[
            {'char-set': 'utf-8'},
            {'name': 'description', 'content': 'My super dooper dope app'}
          ]}
        />
      <div className="bs-docs-header">
        <div className="container-fluid" style={{textAlign: 'center', margin:"20px"}}>
          <FontAwesome name="heartbeat"
            style={{color:"red", textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize: "5em"}}
          /> <div style={{display: "inline", fontSize: "5em"}}>ReDuxnor</div>
        <div>React Redux based Blood donor sample app</div>
        </div>
      </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
