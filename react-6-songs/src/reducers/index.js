import { combineReducers } from 'redux';

// Reducers returns a list of songs and a specific song

const songsReducer = () => {
    return [
        { title: 'song 1', duration: '4:02' },
        { title: 'song 2', duration: '3:04' },
        { title: 'song 3', duration: '2:05' },
        { title: 'song 4', duration: '1:07' },
        { title: 'song 5', duration: '6:01' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});