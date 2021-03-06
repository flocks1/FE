import axios from 'axios';
import axiosWithAuth from '../utils/axiosauth';

export const SEND_SENTIMENT_START = 'SEND_SENTIMENT_START';
export const SEND_SENTIMENT_SUCCESS = 'SEND_SENTIMENT_SUCCESS';
export const SEND_SENTIMENT_FAILURE = 'SEND_SENTIMENT_FAILURE';


export const sentimentSend = searchQuery=> dispatch => {
  // dispatch({ type: SEND_SENTIMENT_START });
  //is this supposed to be a POST?
  axios
    .get(`http://api.mota-analytica.io/deepbelief/${searchQuery}`)
    .then(res => {
      console.log('SENTIMENT RESPONSE',res.data)
      return res.data
      // dispatch({ type: SEND_SENTIMENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      // dispatch({ type: SEND_SENTIMENT_FAILURE, payload: err.response });
    });
};