import { combineReducers } from 'redux';
import loginR  from '../reducers/loginreducer';
import getData from '../reducers/getdata';
import registrationR from '../reducers/registerreducer';
import getSentiment from '../reducers/sentimentReducer';

export default combineReducers({
  loginR,
  getData,
  registrationR,
  getSentiment

});