import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>Post List</div>
    }
}
// first argument the state, second argument action creator
export default connect(null, { fetchPosts })(PostList);