import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

// Llamo al connect para desde el componente 
// para llamar al Action Creator y traer el user que necesito

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        // find the user from the store that match with the user with id we pass to the component
        const user = this.props.users.find(user => user.id === this.props.userId);
        if (!user) { return null }

        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);