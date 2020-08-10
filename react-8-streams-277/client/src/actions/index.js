import streams from '../apis/streams';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    GET_STREAM,
    GET_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

//ACTION CREATOR
export const createStream = (formValues) => async (dispatch, getState) => {
    //getState return an entire state object
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });
    // ACTION --> { type: CREATE_STREAM, payload: response.data }
    dispatch({ type: CREATE_STREAM, payload: response.data });
    //navigate user programatically
    history.push('/');
};

//ACTION CREATOR
export const getStreams = () => async (dispatch) => {
    const response = await streams.get('/streams');
    // ACTION
    dispatch({ type: GET_STREAMS, payload: response.data });
};

//ACTION CREATOR
export const getStream = (id) => async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    // ACTION
    dispatch({ type: GET_STREAM, payload: response.data });
};

//ACTION CREATOR
export const editStream = (id, formValues) => async (dispatch) => {
    const response = await streams.put(`/streams/${id}`, formValues);
    // ACTION
    dispatch({ type: EDIT_STREAM, payload: response.data });
};

//ACTION CREATOR
export const deleteStream = (id) => async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    // ACTION
    dispatch({ type: DELETE_STREAM, payload: id });
};
