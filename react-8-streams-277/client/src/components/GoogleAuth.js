import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    };

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
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I dont know if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed in!</div>
        } else {
            return <div>I am not signed in</div>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;

//const auth = gapi.auth2.getAuthInstance() returns an object, then can see all function in there
// like sigIn, signOut, etc.
// auth.signIn() --> opens a google pop up to log in