import React, { Component } from 'react';


import {FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE} from '../actions';



export const initialState = {
    
    fetchingData: false,
    itemData: [],
    error:''
    
};

export const getData = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_DATA_START:
        return{
            ...state,
            fetchingData:true,
            error:''
        }

        case FETCH_DATA_SUCCESS:
        return{
            ...state,
            fetchingData:false,
            itemData:action.payload,
            error:''
        }

        case FETCH_DATA_FAILURE:
        return{
            ...state,
            fetchingData:false,
            
            error:action.payload.data.error
        }

        default:
        
            return state;
    
    }
}

