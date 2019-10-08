import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {initiateLogin} from '../../actions/login';
import axiosMock from 'axios';
import {LOGIN_START, LOGIN_SUCCESS} from '../../actions/login';



describe('Tests login redux actions',()=>{

    
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    

    it('should return dispatched login start and login success actions',() =>{
        
        const store = mockStore({});
        //the mock store will create an array of dispatched actions which serve as an action log for tests.
        

       


        //jest mocking npm module axios
        axiosMock.post.mockResolvedValueOnce({
            data: { payload: 'test-complete' },
            })
    
    
        const expectedActions = [{type:LOGIN_START},{type:LOGIN_SUCCESS,payload:'test-complete'}];
    
        const creds = {'username':'test','password':'test'};
    
    
        return store.dispatch(initiateLogin(creds)).then(() =>{
            expect(store.getActions()).toEqual(expectedActions);
        })
    
    
    })
})