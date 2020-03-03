import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    // Create a function and pass it to the child
    // to get data from child
    onSearcSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 46b19875073b43410a2b41b72bdc18ca2f387a18e308111bd3fd1677682b1a57'
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {/* onSubmit can be called anything we want, runWhenCalled, etc */}
                {/* it has not to be named like that, you can put any name you want */}
                <SearchBar onSubmit={this.onSearcSubmit} />
            </div>
        );
    }
}

export default App;