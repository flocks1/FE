import axios from 'axios';




export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const initiateLogin = creds => dispatch =>{

    dispatch({type:LOGIN_START});
    
    return axios
    // .post('http://localhost:5000/api/login',creds)
    .post('https://build-week.herokuapp.com/login',creds)
    .then(
        resp => {
            console.log("Response",resp.data);
            localStorage.setItem('token',resp.data.payload)
            dispatch({type:LOGIN_SUCCESS,payload:resp.data.payload})}
        
    )
    .catch(
        err => console.log('failuer',err)
    )
}
