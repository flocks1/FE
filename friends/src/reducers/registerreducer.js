import React, { Component } from 'react';

import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions';


const initialState = {
    registerStart:false,
    registerSuccess:false,
    registerFailure:false,
    error:''
    

}
const registrationR = (state=initialState,action) => {
    switch(action.type){
        case REGISTER_START:
        return{
            ...state,
            registerStart:true
        }

        case REGISTER_SUCCESS:
        return{
            ...state,
            registerSuccess:true,
            registerFailure:false,
            registerStart:false
            
        }

        case REGISTER_FAILURE:
        return{
            ...state,
            registerSuccess:false,
            registerFailure:true,
            registerStart:false,
            error:action.payload.data.error
        }
        default:

            return initialState;
        
        
    }


}

export default registrationR;