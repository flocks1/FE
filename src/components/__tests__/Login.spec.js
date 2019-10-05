import React from 'react';
import{render, fireEvent, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



import loginR from '../../reducers/loginreducer';
import Login from '../Login';

function routerWrapper(){

}
function renderWithRedux(
    ui,
    { store = createStore(loginR) } = {})
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
   
    it('loads without failing', () =>{
        renderWithRedux(<Login/>)
    })
})

describe('Test input displays correct UI class when clicked--> ',  () =>{
   
    
    it('Username input displays proper class once clicked', async ()=>{
        const { getByText, getByTestId} = renderWithRedux(<Login/>);
    
        fireEvent.click(getByTestId('username'));
    

        const highlightedUsernameInput = await getByTestId('username-ui').className;
        
        expect(highlightedUsernameInput).toBe('inputdiv transform-inputdiv');

        fireEvent.click(getByTestId('username'));
        
    });
   

})
