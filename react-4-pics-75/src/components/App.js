import React from 'react';
import SearchBar from './SearchBar'

class App extends React.Component {
    // Create a funciont and pass it to the child
    // to get data from child
    onSearcSubmit(term) {
        console.log(term);
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