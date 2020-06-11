import jsonPlaceholder from '../apis/jsonPlaceholder';

// with API calls (asynchronous call) we have to use middleware to handle this
// amd to avoid the normal flow of action and reducers get broken
// the action creator MUST return a plain js object
// to have async action creators inside redux app, you have to install a middleware
// with Redux Thunk now you Action Creators CAN return action objects, or return functions

// a function that returns a function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
}

// option 2

// export const fetchPosts = () => {
//     return async function(dispatch) {
//         const response = await jsonPlaceholder.get('/posts');

//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         });
//     }
// };

// a function that returns a function
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
}