import {
    PLACE_CHANGED,
    ADD_MARKERS,
    MARKER_SELECTED,
    LOCATION_CAPTURED
} from '../actions/map';

const initialState = {
  defaultCenter: {lat: 20.8919479, lng: 73.7493284},
  defaultZoom: 8,
  center: {lat: 20.8919479, lng: 73.7493284},
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
