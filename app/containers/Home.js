import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { fitBounds } from 'google-map-react/utils';
var FontAwesome = require('react-fontawesome');
import { default as _ } from "lodash";
import SearchBox from '../components/SearchBox';
import * as MapActions from '../actions/map';


export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  onChildClick(e) {
    console.log(e);
  }

  onChildMouseEnter(e) {
    console.log(e);
  }

  onPlacesChanged(newPlace) {
    this.props.dispatch(MapActions.onPlacesChanged(newPlace[0]));
    console.log(newPlace[0]);
    var place = newPlace[0];
    this.props.dispatch(MapActions.addMarkers(newPlace));
    // if (place.geometry.viewport) {
    //   fitBounds(place.geometry.viewport);
    // }
    //this.setState({center: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
    //this.refs.googleMap.center = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
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
                onChildClick={this.onChildClick}
                onChildMouseEnter={this.onChildMouseEnter}
                defaultZoom={this.props.map.defaultZoom}
                center={this.props.map.center}
                defaultCenter={this.props.map.defaultCenter}>
                {
                  this.props.map.markers.map((marker, index) => {
                  return <FontAwesome name="heartbeat"
                    style={{color:'red'}}
                    size="2x"
                    key={'marker_'+index}
                    onClick={this.placeSelected}
                    lat={marker.geometry.location.lat()}
                    lng={marker.geometry.location.lng()}
                  />
              })}
              </GoogleMap>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" >
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    map: state.map
  };
}

export default connect(mapStateToProps)(Home);
