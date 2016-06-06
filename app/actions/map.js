export const PLACE_CHANGED = 'PLACE_CHANGED';
export const ADD_MARKERS = 'ADD_MARKERS';
export const MARKER_SELECTED = 'MARKER_SELECTED';

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
