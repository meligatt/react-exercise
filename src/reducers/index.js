import { combineReducers } from 'redux';
import properties from './properties';
import singleProperty from './singleProperty';

export default combineReducers({
  properties,
  singleProperty
});