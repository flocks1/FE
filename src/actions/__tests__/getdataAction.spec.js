import axiosMock from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getData,FETCH_DATA_START,FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from '../';


describe('getTwitterData', () =>{

   
   
    const mockStore = configureMockStore([thunk]);
    
    let store = mockStore({});

    it('tests that store calls dispatch with the correct action objects',() =>{
        const expectedPayload = 'test_payload';
        
        
        const expectedDispatchedActions = [{type:FETCH_DATA_START},{type:FETCH_DATA_SUCCESS,payload:expectedPayload}];
        //mock resolved async call once with payload
        axiosMock.get.mockResolvedValueOnce({data:expectedPayload})

        // store dispatches thunk
        store.dispatch(getData()).then(() =>
            expect(store.getActions()).toEqual(expectedDispatchedActions));
    })
})


