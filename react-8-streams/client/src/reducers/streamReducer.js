import _ from 'lodash';
import {
    CREATE_STREAM,
    GET_STREAMS,
    GET_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

//the first time returns an empty object
export default (state = {}, action) => {
    switch (action.type) {
        case GET_STREAMS:
            //create a new object with all records mapped from array to object, and return the new state
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        //create a new object with all records and the new one, and return the new state
        case GET_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            //what key I want to delete from the state object
            //create a new object without the key
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

//mapKeys example tranforms form array to object
// const colors = [
//     { hue: 'yellow', large: 4 },
//     { hue: 'red', large: 2 },
//     { hue: 'green',  large: 6}
// ];
// _.mapKeys(colors, 'hue');

// {
//     "yellow": { "hue": "yellow", "large": 4 },
//     "red": { "hue": "red", "large": 2 },
//     "green": { "hue": "green", "large": 6 }
// };
