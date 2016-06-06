import React, { Component } from 'react';
import Helmet from 'react-helmet';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { fitBounds } from 'google-map-react/utils';
var FontAwesome = require('react-fontawesome');
import { default as _ } from "lodash";
import SearchBox from '../components/SearchBox';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {center:{lat: 13.0211773, lng: 77.6593393}}
  }

  onPlacesChanged(newPlace) {
    console.log(newPlace[0]);
    var place = newPlace[0];
    // if (place.geometry.viewport) {
    //   fitBounds(place.geometry.viewport);
    // }
    //this.setState({center: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
    this.refs.googleMap.map_.panTo({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()});
    //this.refs.googleMap.zoom = 9;
    //this.refs.googleMap._initMap();
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group">
              <SearchBox onPlacesChanged={this.onPlacesChanged.bind(this)} />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button"><FontAwesome name="location-arrow" /></button>
                <button className="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{height:"100%"}}>
            <div style={{height:"500px", width:"100%"}}>
              <GoogleMap
                ref="googleMap"
                defaultCenter={this.state.center}>
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
