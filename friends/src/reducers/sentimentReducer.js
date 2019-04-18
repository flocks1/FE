import {SEND_SENTIMENT_START,
 SEND_SENTIMENT_SUCCESS, 
SEND_SENTIMENT_FAILURE} from '../actions';

const initialState = {
    
    fetchingSentiment: false,
    sentimentData: [],
    error:''
    
};

const getSentiment = (state=initialState,action) =>{
    switch(action.type){
        case SEND_SENTIMENT_START:
        return{
            ...state,
            fetchingSentiment:true,
            error:''
        }

        case SEND_SENTIMENT_SUCCESS:
        return{
            ...state,
            fetchingSentiment:false,
            sentimentData:action.payload,
            error:''
        }

        case SEND_SENTIMENT_FAILURE:
        return{
            ...state,
            fetchingSentiment:false,
            
            error:action.payload.data.error
        }

        default:
        
            return initialState;
    
    }
}

export default getSentiment;