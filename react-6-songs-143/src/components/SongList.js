import React, { Component } from 'react';
import { connect } from 'react-redux';

// option 1
// class SongList extends React.Component {}

// option 2
class SongList extends Component {
    // take the list of songs and map them and return a JSX
    renderList() {
        return this.props.songs.map(
            song => {
                return (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <button className="ui button primary">
                                Select
                            </button>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>
                );
            });
    }
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// this name it´s used by convention, we can call it anything we want
// takes all the data from the store(get the state) all the data inside a redux store 
// run some calculation and show up as props inside a component
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

//             call connect() function and then invoke the function
export default connect(mapStateToProps)(SongList);