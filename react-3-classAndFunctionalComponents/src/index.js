import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

// If use as a class and subclasses
// must extends React.Component and define render() method
class App extends React.Component {
  state = {
    lat: null,
    errorMessage: ''
  };

  //This method is used for data loading when component starts
  componentDidMount() {
    // Method provided by web page to geolocate 
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Called setState to update state
        this.setState({
          lat: position.coords.latitude
        });
        //NOT TO DO THIS WAY, ONLY WHEN INITIALIZE
        // this.state.lat = position.coords.latitude;
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log('UPDATE');
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message='Please accept location request' />;
  }

  //React says we have to define render!!
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
