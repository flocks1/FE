import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter}  from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';//expect().toHaveClass() etc.
//provides custom DOM element matchers for Jest
import{render, fireEvent, waitForElement} from '@testing-library/react';
import {Provider} from 'react-redux';
import axiosMock from 'axios';
import ItemList from '../ItemList';
import rootReducer from '../../reducers';



function renderWithRedux(
    ui,
    mockPayload,
    {initialState, store = createStore(rootReducer,applyMiddleware(thunk))} = {},
    
){  
    //mock needs to be within lexical scope of our dispatched thunks
    axiosMock.get.mockResolvedValue({
        data: { payload:mockPayload }});
  
    return{
        ...render(<BrowserRouter>
            <Provider store = {store}>
                    {ui}
            </Provider>
        </BrowserRouter>),
        store
    }
}

describe('Unit testing for Item list',() =>{

    it('Component should render one trend',() =>{

        const mockPayload = [{name:'test_trend',tweet_volume:'1'}]

        const {rerender,getByTestId} = renderWithRedux(<ItemList/>,mockPayload);

       
       
        expect(getByTestId('tweet-trend-container').length).toBe(1);
    })


})
// describe('Unit testing for Item list',() =>{

//     it('Component should display correct UI based on dispatched action', () =>{



//     })


// })
// describe('Unit testing for Item list',() =>{

//     it('Component should display correct UI based on dispatched action', () =>{



//     })


// })


//we need our components
//we need a store
//we need a provider for our store
//a way to render our connect component with a store and a router
//a way to mock out axios call on mount
//an initial state for our store>?
//methods to check if our item list contains the correct # of mock items