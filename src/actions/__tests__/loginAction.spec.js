import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {initiateLogin} from '../../actions/login';
import axiosMock from 'axios';
import {LOGIN_START, LOGIN_SUCCESS} from '../../actions/login';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should fetch mock data',() =>{
    const store = mockStore({});

    axiosMock.post.mockResolvedValueOnce({
        data: { payload: 'test-complete' },
        })


    const expectedActions = [{type:LOGIN_START},{type:LOGIN_SUCCESS,payload:'test-complete'}];

    const creds = {'username':'test','password':'test'};


    return store.dispatch(initiateLogin(creds)).then(() =>{
        expect(store.getActions()).toEqual(expectedActions);
    })


})