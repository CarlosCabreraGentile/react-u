import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: []
    };

    // Create a function and pass it to the child
    // to get data from child
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        // once finish the request, update de state with the images
        // and then the component re-render itself
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {/* onSubmit can be called anything we want, runWhenCalled, etc */}
                {/* it has not to be named like that, you can put any name you want */}
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;