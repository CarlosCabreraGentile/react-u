import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

//with redux-form MUST use the key -> form: 
export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});
