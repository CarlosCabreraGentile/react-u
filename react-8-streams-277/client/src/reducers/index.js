import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

//with redux-form MUST use the key -> form: 
export default combineReducers({
    auth: authReducer,
    form: formReducer
});
