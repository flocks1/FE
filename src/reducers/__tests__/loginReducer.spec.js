import loginR from "../loginreducer";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../actions';


describe('Reducer: Login',() =>{
    describe('Evaluates if login reducer returns correct finite state based on action consumed',() =>{
        it('Returns correct default state with NO applicable action passed',() =>{
            const expected = {
                loginStart:false,
                loginSuccess:false,
                loginFailure:false,
                error:''
            
            }
            const mockAction = {type:'mock'}
            expect(loginR(expected,mockAction)).toEqual(expected);
        })

        it('Returns correct state for LOGIN_START',() =>{
            const priorState = {
                loginSuccess:true,
                loginFailure:false,
                loginStart:false
            }
            const expected = {
                loginStart:true,
                loginSuccess:false,
                loginFailure:false,
                
            }
            const mockAction = {type:LOGIN_START};
            expect(loginR(priorState,mockAction)).toEqual(expected);

        })

        it('Returns correct state for LOGIN_SUCCESS',() =>{
            const priorState = {
                loginSuccess:false,
                loginFailure:false,
                loginStart:true
            }

            const expected = {
                loginStart:false,
                loginSuccess:true,
                loginFailure:false,
                
            }
            const mockAction = {type:LOGIN_SUCCESS};
            expect(loginR(priorState,mockAction)).toEqual(expected);
        })

        it('Returns correct state for LOGIN_FAILURE',() =>{
            const mock_error = 'myError';
            const mock_payload = {data:{error:mock_error}};
            const mockAction = {type:LOGIN_FAILURE,payload:mock_payload}

            const priorState = {
                loginSuccess:false,
                loginFailure:false,
                loginStart:true
            }
            const expected = {
                loginStart:false,
                loginSuccess:false,
                loginFailure:true,
                error:mock_error
                
            }
           
           
            expect(loginR(priorState,mockAction)).toEqual(expected);
        })
    })
})

