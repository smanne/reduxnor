import React, {PropTypes, Component} from 'react';
var FontAwesome = require('react-fontawesome');
import {
  OverlayTrigger, Popover
} from 'react-bootstrap/lib';



export default class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {showContactInfo: false}
  }

  showContactInfoLink(donor) {
    console.log("show contact");
    return this.state.showContactInfo?<div>
      <div>
        <strong>Email:</strong> {donor.email}
      </div>
      <div>
        <strong>Phone:</strong> {donor.contactNumber}
      </div>
    </div>:
    <a onClick={(e) => this.setState({showContactInfo: true})}>
      Show contact info
    </a>
  }

  render() {
    const MARKER_SIZE = 20;
    const markerStyle = {
      color:'red',
      position: 'absolute',
      width: MARKER_SIZE,
      height: MARKER_SIZE,
      left: -MARKER_SIZE / 2,
      top: -MARKER_SIZE / 2,
      cursor: 'pointer',
      fontSize: "20px"
    }

    const markerStyleHovered = {
      ...markerStyle,
      fontSize: "25px"
    }

    return (
      <OverlayTrigger trigger="click" rootClose placement="top" overlay={<Popover title={this.props.donor.name}><div><strong>Bloodgroup:</strong> {this.props.donor.bloodGroup}</div>{this.showContactInfoLink(this.props.donor)}<div><strong>Address:</strong> {this.props.donor.address}</div></Popover>}>
        <FontAwesome className={this.props.key} name="heartbeat"
          style={this.props.$hover?markerStyleHovered:markerStyle}
        />
      </OverlayTrigger>

    );
  }
}
