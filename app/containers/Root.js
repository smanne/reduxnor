import React, { Component } from 'react';

class Root extends Component {

  renderInitialState() {
    if (this.props.initialState) {
      const innerHtml = `window.__INITIAL_STATE__ = ${JSON.stringify(this.props.initialState)}`;
      return <script dangerouslySetInnerHTML={{__html: innerHtml}} />;
    }
  }

  renderEnvironment() {
    const innerHtml = `window.__ENVIRONMENT__ = '${__ENVIRONMENT__}'`;
    return <script dangerouslySetInnerHTML={{__html: innerHtml}} />
  }

  render() {
    const head = this.props.head;

    return (
      <html>
        <head>
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
          <link href='https://fonts.googleapis.com/css?family=Nunito:300,400' rel='stylesheet' type='text/css'/>
          <link rel="stylesheet" href="/static/css/all.css"/>
        </head>
        <body>
          <div className="container-fluid" id='root' dangerouslySetInnerHTML={{__html: this.props.content}} style={{height:"100%"}} />
          {this.renderEnvironment()}
          {this.renderInitialState()}
          {head.script.toComponent()}
          <script src={!process.env.NODE_ENV ? '/app.js' : '/app.min.js'}></script>
        </body>
      </html>
    );
  }
}

export default Root;
