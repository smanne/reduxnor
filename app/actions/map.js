export const PLACE_CHANGED = 'PLACE_CHANGED';
export const ADD_MARKERS = 'ADD_MARKERS';
export const MARKER_SELECTED = 'MARKER_SELECTED';
export const LOCATION_CAPTURED = 'LOCATION_CAPTURED';

export const onPlacesChanged = (place) => {
  return {
    type: PLACE_CHANGED,
    place: place
  }
}

export const addMarkers = (markers) => {
  return {
    type: ADD_MARKERS,
    markers: markers
  }
}

export const markerSelected = (selectedMarker) => {
  return {
    type: MARKER_SELECTED,
    selectedMarker: selectedMarker
  }
}

export const locationCaptured = (newLocation) => {
  return {
    type: LOCATION_CAPTURED,
    newLocation: newLocation
  }
}
