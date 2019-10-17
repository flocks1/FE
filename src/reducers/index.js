import { combineReducers } from 'redux';
import loginR  from '../reducers/loginreducer';
import {getData} from '../reducers/getdata';
import registrationR from '../reducers/registerreducer';
import getSentiment from '../reducers/sentimentReducer';
/*Uses ES6 object literal shorthand syntax to define the object shape*/
export default combineReducers({
  loginR,
  getData,
  registrationR,
  getSentiment

});