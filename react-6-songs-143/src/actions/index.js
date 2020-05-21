// Actions creators
// Action has a TYPE and PAYLOAD

export const selectSong = song => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
