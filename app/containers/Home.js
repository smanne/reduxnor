import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { fitBounds } from 'google-map-react/utils';
var FontAwesome = require('react-fontawesome');
import { default as _ } from "lodash";
import SearchBox from '../components/SearchBox';
import Marker from '../components/Marker';
import AddDonor from '../components/AddDonor';
import * as MapActions from '../actions/map';
import * as DonorActions from '../actions/donor';
import config from '../config';


export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.captureLocation();
    this.props.dispatch(DonorActions.fetchDonors());
  }

  captureLocation() {
    navigator.geolocation.getCurrentPosition(function(pos){
      var newLoc = {lat: pos.coords.latitude, lng: pos.coords.longitude};
      this.props.dispatch(MapActions.locationCaptured(newLoc));
    }.bind(this));
  }

  onPlacesChanged(newPlace) {
    this.props.dispatch(MapActions.onPlacesChanged(newPlace[0]));
  }

  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group">
              <SearchBox id="home-search-box" style={{height: "50px"}} onPlacesChanged={this.onPlacesChanged.bind(this)} />
              <span className="input-group-btn">
                <button style={{height: "50px"}} className="btn btn-default" onClick={this.captureLocation.bind(this)} type="button"><FontAwesome name="location-arrow" /></button>
                <button style={{height: "50px"}} className="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
        <AddDonor defaultCenter={this.props.map.center} className="add-donor"/>
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
                    return <Marker name="heartbeat"
                      key={'marker_'+index}
                      donor={donor}
                      lat={donor.loc.coordinates[0]}
                      lng={donor.loc.coordinates[1]}
                    />
              }):undefined}
              </GoogleMap>
            </div>
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
