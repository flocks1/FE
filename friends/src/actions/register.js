import axios from 'axios';




export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


export const initiateRegister = creds => dispatch =>{

    dispatch({type:REGISTER_START});

    return axios
    // .post('http://localhost:5000/api/register',creds)
    .post('https://build-week.herokuapp.com/register',creds)
    .then(
        resp => {
            console.log(resp);
            localStorage.setItem('token',resp.data.payload)
            dispatch({type:REGISTER_SUCCESS,payload:resp.data.payload})}
        
    )
    .catch(
        err => console.log('failuer',err)
    )
}