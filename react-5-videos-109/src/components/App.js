import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = {
        videos: []
    };

    onInputTextSubmit = async inputText => {
        const response = await youtube.get('/search', {
            params: {
                q: inputText
            }
        });

        this.setState({ videos: response.data.items });
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