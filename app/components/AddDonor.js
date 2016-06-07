import React from 'react';
import {
  Button, Modal, ButtonInput, Select
} from 'react-bootstrap/lib';
import { Form, ValidatedInput } from 'react-bootstrap-validation';
import SearchBox from './SearchBox';
import GoogleMap from 'google-map-react';
var FontAwesome = require('react-fontawesome');


export default class AddDonor extends React.Component {

  constructor(props, context) {
   super(props, context);
   this.state = { showModal: false, name:'',
                  email:'', contactNumber: '', address:'', loc:{},
                  center: props.defaultCenter,
                  selectedAddress: {}
                 };
  }

 close() {
   this.setState({ showModal: false });
 }

  getValidationState() {
    const length = this.state.name.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  onPlacesChanged(newPlace) {
    console.log(newPlace);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  _handleValidSubmit(values) {
       // Values is an object containing all values
       // from the inputs
    this.setState({address: this.state.selectedAddress.formatted_address,
      loc: {
      "type": "Point",
      "coordinates": [
        13.0238145,
        77.6590534
      ]
    }
    })
    this.setState(values);
    
   }

   _handleInvalidSubmit(errors, values) {
       // Errors is an array containing input names
       // that failed to validate
   }

   onMapClick(obj) {
     fetch('http://maps.googleapis.com/maps/api/geocode/json?latlng='+obj.lat+','+obj.lng+'&sensor=true')
     .then((response) => {
       return response.json();
     })
     .then(
       (result) => {this.setState({selectedAddress: result.results[0]});},
       (error) => console.log(error)
     );
     this.setState({center: {lat: obj.lat, lng: obj.lng}});
   }

 open() {
   this.setState({ showModal: true });
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
     <div>
       <Button
         style={this.props.style}
         bsStyle="primary"
         onClick={this.open.bind(this)}
       >
         Add Donor
       </Button>

       <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
         <Modal.Header closeButton>
           <Modal.Title>Add Donor</Modal.Title>
         </Modal.Header>
         <Modal.Body>
          <Form
            onValidSubmit={this._handleValidSubmit.bind(this)}
            onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>
            <ValidatedInput
                    type='text'
                    placeholder="Enter your name"
                    // Each input that you need validated should have
                    // the "name" prop
                    name='name'
                    // Validation rules separated with comma
                    validate='required'
                    // Error messages for each error type
                    errorHelp={{
                        required: 'Please enter your name'
                    }}
            />
            <ValidatedInput
                    type='text'
                    placeholder="Enter your email"
                    // Each input that you need validated should have
                    // the "name" prop
                    name='email'
                    // Validation rules separated with comma
                    validate='required,isEmail'
                    // Error messages for each error type
                    errorHelp={{
                        required: 'Please enter your email',
                        isEmail: 'Email is invalid'
                    }}
            />
            <ValidatedInput
                    type='text'
                    placeholder="Enter your phone number"
                    // Each input that you need validated should have
                    // the "name" prop
                    name='contactNumber'
                    // Validation rules separated with comma
                    validate='required'
                    // Error messages for each error type
                    errorHelp={{
                        required: 'Please enter your Phone number',
                    }}
            />
            <ValidatedInput
                    type='text'
                    placeholder="Enter your blood group"
                    // Each input that you need validated should have
                    // the "name" prop
                    name='bloodGroup'
                    // Validation rules separated with comma
                    validate='required'
                    // Error messages for each error type
                    errorHelp={{
                        required: 'Please enter your blood group'
                    }}
            />
            <div className="row">
              <div className="col-md-12" style={{marginBottom:"10px", fontWeight:"bold"}}>
                Select your approximate location on map (Click on map to change marker location)
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{marginBottom:"10px", fontWeight:"bold"}}>
                Address: {this.state.selectedAddress?this.state.selectedAddress.formatted_address:''}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{height:"100%"}}>
                <div style={{height:"200px", width:"100%"}}>
                  <GoogleMap
                    ref="selectLocation"
                    defaultZoom={12}
                    onClick={this.onMapClick.bind(this)}
                    defaultCenter={this.props.defaultCenter}>
                    <FontAwesome name="heartbeat"
                      style={markerStyle}
                      size="2x"
                      key={'donormarker'}
                      lat={this.state.center.lat}
                      lng={this.state.center.lng}
                    />
                  </GoogleMap>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" style={{textAlign:"right", marginTop:"20px"}} >
              <ButtonInput
                  type='submit'
                  bsStyle='primary'
                  value='Register'
              />
              </div>
            </div>
          </Form>
         </Modal.Body>
         <Modal.Footer>

         </Modal.Footer>
       </Modal>
     </div>
   );
 }
}
