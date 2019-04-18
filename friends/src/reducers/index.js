import { combineReducers } from 'redux';
import loginR  from '../reducers/loginreducer';
import getData from '../reducers/getdata';
import registrationR from '../reducers/registerreducer';

export default combineReducers({
  loginR,
  getData,
  registrationR

});