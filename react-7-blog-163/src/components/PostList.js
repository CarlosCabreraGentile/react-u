import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (<div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            </div>
            );
        });
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

const mapStateProps = state => {
    return { posts: state.posts };
};

// first argument the state, second argument action creator
export default connect(mapStateProps, { fetchPosts })(PostList);