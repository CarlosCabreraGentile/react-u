import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    // instead of
    // props.song.title
    // props.song.duration
    // => destructuring { song }

    if (!song) return <div>Select a song</div>

    return (
        <div>
            <h3>Details: </h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    )
};

// connect with the provider to get all the data, the state object
// now we can take the property we want from state
const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
};

// connect the component and then to the provider to get the state
// then pass the data as a props
export default connect(mapStateToProps)(SongDetail);