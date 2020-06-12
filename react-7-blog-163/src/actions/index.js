import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

/**
 * With MEMOIZE function we can call it with an unique argument one time
 * after that just return the previous value, without making again the request
 * save in memory that call and the values returned
 */

// with API calls (asynchronous call) we have to use middleware to handle this
// and to avoid the normal flow of action and reducers get broken
// the action creator MUST return a plain js object
// to have async action creators inside redux app, you have to install a middleware
// with Redux Thunk now you Action Creators CAN return action objects, or return functions

// FETCH POSTS a function that returns a function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

// FETCH USER a function that returns a function
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

// FETCH POSTS and USERS a function that returns a function
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // calling an action creator from another action creator
    await dispatch(fetchPosts());
    // iterates over array and returns all differents ids
    // uniq return an array with the unique user id
    const userIds = _.uniq(_.map(getState().posts, 'userId'));

    // not necessary put the await, because we can wait for it
    userIds.forEach(id => dispatch(fetchUser(id)));
};


// OPTION 2

// export const fetchPosts = () => {
    //     return async function(dispatch) {
//         const response = await jsonPlaceholder.get('/posts');

//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: response
//         });
//     }
// };

// OPTION WITH MEMOIZE

// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     // makes the request and dispatch an action one time
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });

