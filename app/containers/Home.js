import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { fitBounds } from 'google-map-react/utils';
var FontAwesome = require('react-fontawesome');
import { default as _ } from "lodash";
import SearchBox from '../components/SearchBox';
import AddDonor from '../components/AddDonor';
import * as MapActions from '../actions/map';
import * as DonorActions from '../actions/donor';


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

  componentDidMount() {
    this.props.dispatch(DonorActions.fetchDonors());
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
    const MARKER_SIZE = 20;
    const markerStyle = {
      color:'red',
      position: 'absolute',
      width: MARKER_SIZE,
      height: MARKER_SIZE,
      left: -MARKER_SIZE / 2,
      top: -MARKER_SIZE / 2
    }
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
                  this.props.donor.donors?this.props.donor.donors.map((donor, index) => {
                  return <FontAwesome name="heartbeat"
                    style={markerStyle}
                    size="2x"
                    key={'marker_'+index}
                    lat={donor.loc.coordinates[0]}
                    lng={donor.loc.coordinates[1]}
                  />
              }):undefined}
              </GoogleMap>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <AddDonor defaultCenter={this.props.map.center} style={{position:'fixed', top:"40px", right:"10px"}}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    map: state.map,
    donor: state.donor
  };
}

export default connect(mapStateToProps)(Home);
