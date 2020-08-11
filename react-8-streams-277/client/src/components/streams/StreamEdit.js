import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { getStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                >
                </StreamForm>
            </div>
        );
    }
}

const mapStateToProps = (state, properties) => {
    const idStream = properties.match.params.id;
    return { stream: state.streams[idStream] }
};


export default connect(mapStateToProps,
    { getStream, editStream })
    (StreamEdit);