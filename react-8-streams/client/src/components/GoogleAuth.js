import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    // look for gapi documentation in google
    componentDidMount() {
        //Load library
        window.gapi.load('client:auth2', () => {
            //Init the  library
            window.gapi.client.init({
                clientId: '276510463931-tluqcvmlsmcmkng9ck1idnk2pco7lt1l.apps.googleusercontent.com',
                scope: 'email'
            })
                .then(() => {
                    //Get the reference of the library
                    this.auth = window.gapi.auth2.getAuthInstance();
                    //Update and re-render the component
                    this.onAuthChange(this.auth.isSignedIn.get());
                    //listen to changes status
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            //call action creator
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            //call action creator
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                //function without parentesis to avoid the execution when component its instanciated
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui green google button">
                    <i className="google icon" />
                    Sign In
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

//const auth = gapi.auth2.getAuthInstance() returns an object, then can see all function in there
// like sigIn, signOut, etc.
// auth.signIn() --> opens a google pop up to log in