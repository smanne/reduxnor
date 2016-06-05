import React, { Component } from 'react';
import Helmet from 'react-helmet';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { default as _ } from "lodash";


export default class Home extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..."/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Current Location</button>
                <button className="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{height:"100%"}}>
            <div style={{height:"500px", width:"100%"}}>
              <GoogleMap
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}>
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Home.defaultProps = {
  center: {lat: 13.0211773, lng: 77.6593393},
  zoom: 9,
  greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
};

Home.shouldComponentUpdate = shouldPureComponentUpdate;
