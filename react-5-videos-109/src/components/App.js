import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    onInputTextSubmit = inputText => {
        youtube.get('/search', {
            params: {
                q: inputText
            }
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchBarFormSubmit={this.onInputTextSubmit} />
            </div>
        );
    }
}

export default App;