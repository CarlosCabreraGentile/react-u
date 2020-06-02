import { combineReducers } from 'redux';

// Reducers returns a list of songs and a specific song

export default combineReducers({
    // return some fake value just to avoid the error message
    // just to tell redux we have a valir reducer
    fakeValue: () => 'Fake Value'
});