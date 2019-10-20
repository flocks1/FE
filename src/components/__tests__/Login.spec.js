import React from 'react';
import{cleanup,render, fireEvent, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axiosMock from "axios";


import rootReducer from '../../reducers/';
import Login from '../Login';



// function routerWrapper(){

// }
function renderWithRedux(
    ui,
    { store = createStore(rootReducer,applyMiddleware(thunk)) } = {})
   {
       
    return {
      ...render(<BrowserRouter><Provider store={store}>{ui}</Provider></BrowserRouter>),
      // adding `store` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      store,
    }
}


describe('Login Unit Testing', () =>{
    
    it.skip('loads without failing', () =>{
        renderWithRedux(<Login/>)
    })

})

describe('Tests input displays correct UI class when clicked--> ',  () =>{
    
    it.skip('Username input displays proper class once clicked', async ()=>{
        const { getByText, getByTestId} = renderWithRedux(<Login/>);
    
        fireEvent.click(getByTestId('user-name'));
    

        const highlightedUsernameInput = await getByTestId('username-ui').className;
        
        expect(highlightedUsernameInput).toBe('inputdiv transform-inputdiv');

        fireEvent.click(getByTestId('user-name'));
        
    });


})

// describe("Checks Enter passord prompt upon submitting only a username", () =>{
//     it.skip('Enters a username and clicks submit', async () =>{
        
//         const { getByText, getByTestId} = renderWithRedux(<Login/>);
//         fireEvent.change(getByTestId('user-name'),({target:'dbtestusername'}))
//         fireEvent.click(getByTestId('test-submit'))

//         const pwError = await waitForElement()

//     })
// })

// describe("login start triggers animation", ()=>{
  
//     const {getByText, getByTestId} = renderWithRedux(<Login/>);
       
    
//     it("Enters a username and password, clicks submit, & asserts login animation class is changed", ()=>{
        

//         fireEvent.change(getByTestId('user-name'),{target:{value:'dbtestusername'}});
//         fireEvent.change(getByTestId('password'),{target:{value:'testpassword'}});

        
        

       
//         fireEvent.click(getByTestId('test-submit'));
//         expect(getByTestId('login-animation').className).toBe('animation-div pulse');
       
       

//     })
    
// })

//final test will not run if other two tests are uncommented, strange
//fake login next with mocked axios and fake local storage
//remember the philosophy of testing library react is to test it as the user expects to see the component

//take aways
//going forward with this testing philosophy
//not going to test actions for redux store connected components, just UI changes
//going to test store (thunk) dispatches separately