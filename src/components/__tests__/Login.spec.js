import React from 'react';
import{render, fireEvent, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axiosMock from "axios";


import loginR from '../../reducers/loginreducer';
import Login from '../Login';

function routerWrapper(){

}
function renderWithRedux(
    ui,
    { initialState,store = createStore(loginR,initialState) } = {})
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

describe('Tests input displays correct UI class when clicked--> ',  () =>{
   
    
    it('Username input displays proper class once clicked', async ()=>{
        const { getByText, getByTestId} = renderWithRedux(<Login/>);
    
        fireEvent.click(getByTestId('username'));
    

        const highlightedUsernameInput = await getByTestId('username-ui').className;
        
        expect(highlightedUsernameInput).toBe('inputdiv transform-inputdiv');

        fireEvent.click(getByTestId('username'));
        
    });
   

})

describe("Checks Enter passord prompt upon submitting only a username", () =>{
    it.skip('Enters a username and clicks submit', async () =>{
        
        const { getByText, getByTestId} = renderWithRedux(<Login/>);
        fireEvent.change(getByTestId('username'),({target:'dbtestusername'}))
        fireEvent.click(getByTestId('test-submit'))

        const pwError = await waitForElement()

    })
})

describe("Checks that login process return token is set to local storage", ()=>{
    it("Enteres a username and password, clicks submit, & asserts local storage matches mocked return value",()=>{
        const { getByText, getByTestId} = renderWithRedux(<Login/>);
        axiosMock.post.mockResolvedValueOnce({
            data: { token: 'test token' },
        })

        fireEvent.change(getByTestId('username'),{target:{value:'dbtestusername'}});
        fireEvent.change(getByTestId('password'),{target:{value:'testpassword'}});

        
        

        fireEvent.click(getByTestId('test-submit'))
        expect(window.localStorage.getItem('token')).toBe('test token');

    })
})


//fake login next with mocked axios and fake local storage