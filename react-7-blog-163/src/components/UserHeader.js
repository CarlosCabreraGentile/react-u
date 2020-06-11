import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

// Llamo al connect para desde el componente 
// para crear el Action Creator y traer el user que necesito

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        return <div>USER HEADER</div>
    }
}

export default connect(null, { fetchUser })(UserHeader);