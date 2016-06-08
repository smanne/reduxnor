import {
    PLACE_CHANGED,
    ADD_MARKERS,
    MARKER_SELECTED,
    LOCATION_CAPTURED
} from '../actions/map';

const initialState = {
  defaultCenter: {lat: 12.9745912, lng: 77.5349369},
  defaultZoom: 10,
  center: {lat: 12.9745912, lng: 77.5349369},
  markers: [],
  currentPlace: {},
  currentSelectedMarker: ""
}

export default function map(state = initialState, action) {
    switch (action.type) {
        case PLACE_CHANGED:
            return {...state,
              currentPlace: action.place,
              center: {lat: action.place.geometry.location.lat(), lng: action.place.geometry.location.lng()}
            }
        case ADD_MARKERS:
            return {...state,
                  markers: state.markers.concat(action.markers)
                }
        case LOCATION_CAPTURED:
            return {...state,
              center: action.newLocation
            }
        case MARKER_SELECTED:
            return {...state, currentSelectedMarker: action.selectedMarker
            };
        default:
            return state;
    }
}
