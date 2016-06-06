import {
    PLACE_CHANGED,
    ADD_MARKERS,
    MARKER_SELECTED
} from '../actions/map';

const initialState = {
  defaultCenter: {lat: 13.0211773, lng: 77.6593393},
  defaultZoom: 12,
  center: {lat: 13.0211773, lng: 77.6593393},
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
        case MARKER_SELECTED:
            return {...state, currentSelectedMarker: action.selectedMarker
            };
        default:
            return state;
    }
}
