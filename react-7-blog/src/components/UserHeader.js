import React from 'react';
import { connect } from 'react-redux';

// Llamo al connect para desde el componente 
// para llamar al Action Creator y traer el user que necesito

class UserHeader extends React.Component {

    render() {
        const { user } = this.props;

        if (!user) { return null }

        return <div className="header">{user.name}</div>
    }
}
//                              this second argument it´s a memory reference to component props
const mapStateToProps = (state, ownProps) => {
    // find the user from the store that match with the user with id we pass to the component
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);