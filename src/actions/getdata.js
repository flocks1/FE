import axios from 'axios';
import axiosWithAuth from '../utils/axiosauth';
import {twitterClient} from '../utils/twitterclient';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

//
export const getData = () => dispatch => {
  
  dispatch({ type: FETCH_DATA_START });
  return axios
    .get('https://build-week.herokuapp.com/trends')
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      console.log('trends',res.data)
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

// export const getData = () => dispatch => {
//   dispatch({ type: FETCH_DATA_START });
//   twitterClient
//     .get('https://api.twitter.com/1.1/trends/place.json?id=1', (error,response) => {
//       if(error) {
//         dispatch({ type: FETCH_DATA_FAILURE, payload: error });
//         throw error;
//       }
//       else 
//         console.log('twitter-res',response);
//         dispatch({ type: FETCH_DATA_SUCCESS, payload: response });
      
      
//       });
//     }