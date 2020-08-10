import React from 'react';
import { connect } from 'react-redux';
import { getStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        //call the action creator
        this.props.getStreams();
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
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

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //convert object to an array by taking all the values of the object
    return { streams: Object.values(state.streams) }
};

export default connect(mapStateToProps, { getStreams })(StreamList);