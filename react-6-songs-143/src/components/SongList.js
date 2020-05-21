import React, { Component } from 'react';
import { connect } from 'react-redux';

// option 1
// class SongList extends React.Component {}

// option 2
class SongList extends Component {
    render() {
        return <div>SongList</div>;
    }
}
//             call connect() function and then invoke the function
export default connect()(SongList);