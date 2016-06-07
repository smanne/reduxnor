import { combineReducers } from 'redux';
import map from './map';
import donor from './donor';

export default combineReducers({
  map,
  donor
});
