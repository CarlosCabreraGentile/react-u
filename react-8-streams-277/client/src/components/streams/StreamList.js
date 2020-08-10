import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        //call the action creator
        this.props.getStreams();
    }

    //show delete and edit button
    renderAdminButtons(stream) {
        if ((stream.userId !== null) && (stream.userId === this.props.currentUserId)) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">Edit</button>
                    <button className="ui button negative">Delete</button>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdminButtons(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    };

    renderCreateButton() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                    {this.renderCreateButton()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //convert object to an array by taking all the values of the object
    return {
        //passing this data to the component
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, { getStreams })(StreamList);